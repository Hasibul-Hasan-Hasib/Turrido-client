import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../hooks/useAuth';
import Loading from '../../shared/Loading/Loading';




const Login = () => {

    const navigate = useNavigate();
    const { auth, signInUsingGooglePopup, signInWithEmailAndPassword, setError, setUser, isLoading, setIsLoading } = Auth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user)
                setIsLoading(false);
                navigate('/home')
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsLoading(false)
                console.log(errorCode, errorMessage)
            });
    }

    const handleGoogleSignIn = () => {
        signInUsingGooglePopup()
            .then(result => {
                setUser(result.user)
                navigate('/home')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <>
            {
                isLoading === false ?
                    <section class="bg-gray-50 dark:bg-base-100 my-auto">
                        <div class="flex flex-row items-center justify-center px-6 py-8 m-auto md:h-4/5 lg:py-0">
                            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form class="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                            <Link to='/login' class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                        </div>
                                        <button type="submit" onClick={onLogin} class="w-full text-white bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                        <button type="submit" onClick={handleGoogleSignIn} class="w-full text-white bg-info hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">GOOGLE</button>
                                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <Link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section> : <Loading />
            }
        </>
    );
};

export default Login;