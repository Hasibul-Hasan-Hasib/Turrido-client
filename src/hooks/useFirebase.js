import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveErrorMessage,saveError,saveErrorCode, saveUser, setLoading } from "../features/auth/userAuthSlice";


initializeAuthentication();

const useFirebase = () => {
    const dispatch = useDispatch();
    const auth = getAuth();


    const signInUsingGooglePopup = async () => {
        const googleProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    }




    useEffect(() => {
        dispatch(setLoading(true))
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    dispatch(saveUser(user))
                } else {
                    dispatch(saveUser({}))
                }
                dispatch(setLoading(false))
            } catch (error) {
                dispatch(setLoading(false))
                dispatch(saveErrorMessage(error.message))
            }
        });
        return unsubscribe;
    }, []);


    const logOut = async () => {
        try {
            dispatch(setLoading(true))
            await signOut(auth);
            dispatch(saveUser({}));
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(saveError(true))
            dispatch(saveErrorCode(error.code))
            dispatch(saveErrorMessage(error.message))
            dispatch(setLoading(false))
        }
    };

    return {
        signInUsingGooglePopup,
        logOut,
        auth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
    };
}
export default useFirebase;