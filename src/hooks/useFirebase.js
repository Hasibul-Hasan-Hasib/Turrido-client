import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGooglePopup = async () => {
        try {
            setIsLoading(true);
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            setIsLoading(false);
            return result;
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }




    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    setUser(user);
                } else {
                    setUser({});
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        });
        return unsubscribe;
    }, []);


    const logOut = async () => {
        try {
            setIsLoading(true);
            await signOut(auth);
            setUser({});
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return {
        user,
        signInUsingGooglePopup,
        error,
        setError,
        setUser,
        logOut,
        isLoading,
        setIsLoading,
        auth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
    };
}
export default useFirebase;