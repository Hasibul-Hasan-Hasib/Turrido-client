import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../hooks/useAuth';
import Loading from '../../shared/loading/Loading';
import { signInWithEmailAndPassword } from 'firebase/auth';




const Login = () => {

    const navigate = useNavigate();
    const {
        auth,
        signInUsingGooglePopup,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        setUser,
        isLoading,
        setIsLoading
    } = Auth();



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const reset = () => {
        setEmail('')
        setPassword('')
        setError(false)
        setErrorMessage('')
        setIsLoading(false);
    }



    const onLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            // Sign in with email and password
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            setUser(user);
            reset();

            navigate("/")

        } catch (err) {

            //handle error
            const errorMessage = err.message;
            const errorCode = err.code;
            setError(true)

            // display specific error message based on the error code
            switch (errorCode) {
                case "auth/invalid-email":
                    setErrorMessage("This email address is invalid.");
                    break;
                case "auth/user-disabled":
                    setErrorMessage(
                        "This email address is disabled by the administrator."
                    );
                    break;
                case "auth/user-not-found":
                    setErrorMessage("This email address is not registered.");
                    break;
                case "auth/wrong-password":
                    setErrorMessage("The password is invalid.")
                    break;
                case "auth/missing-password":
                    setErrorMessage("The password is missing.")
                    break;
                default:
                    setErrorMessage(errorMessage);
                    break;
            }

            // Reset form fields
            setPassword('')
            setIsLoading(false)
        }
    }




    const handleGoogleSignIn = async () => {
        setIsLoading(true);

        try {
            // Sign in with Google
            const userCredential = await signInUsingGooglePopup()
            const user = userCredential.user;
            setUser(user);

            reset();

            navigate("/")
        } catch (err) {
            //handle error
            const errorMessage = err.message;
            const errorCode = err.code;
            setError(true)

            // display specific error message based on the error code
            switch (errorCode) {
                case "auth/operation-not-allowed":
                    setErrorMessage("Email/password accounts are not enabled.");
                    break;
                case "auth/operation-not-supported-in-this-environment":
                    setErrorMessage("HTTP protocol is not supported. Please use HTTPS.")
                    break;
                case "auth/popup-blocked":
                    setErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.")
                    break;
                case "auth/popup-closed-by-user":
                    setErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.")
                    break;
                default:
                    setErrorMessage(errorMessage);
                    break;
            }
            setIsLoading(false)
        }
    }


    return (
        <>
            {
                isLoading === false ?
                    <section className="bg-gray-50 dark:bg-base-100 my-auto">
                        <div className="flex flex-row items-center justify-center px-6 py-8 m-auto md:h-4/5 lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                            <Link to='/login' className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                        </div>
                                        <button type="submit" onClick={onLogin} className="w-full text-white bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                        <button type="submit" onClick={handleGoogleSignIn} className="w-full text-white bg-info hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">GOOGLE</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                        </p>
                                    </form>
                                    {
                                        error === true &&
                                        <div role="alert" className="alert alert-error justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 shrink-0 stroke-current"
                                                fill="none"
                                                viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{errorMessage}</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </section> : <Loading />
            }
        </>
    );
};

export default Login;