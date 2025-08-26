import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Auth from "../../hooks/useAuth"
import Loading from "../../shared/loading/Loading"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import {
    saveUser,
    saveError,
    setLoading,
    saveErrorCode,
    saveErrorMessage,
} from "../../features/auth/userAuthSlice"

const Login = () => {
    const { loading,errorCode,error,errorMessage } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { auth, signInUsingGooglePopup } = Auth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const reset = () => {
        setEmail("")
        setPassword("")
        dispatch(saveError(false))
        dispatch(saveErrorMessage(""))
        dispatch(saveErrorCode(""))
        dispatch(setLoading(false))
    }

    const onLogin = async (e) => {
        e.preventDefault()
        dispatch(setLoading(true))

        try {
            // Sign in with email and password
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            )

            const user = userCredential.user
            dispatch(saveUser(user))
            reset()

            navigate("/")
        } catch (error) {
            //handle error
            dispatch(saveError(true))
            dispatch(saveErrorCode(error.code))

            // display specific error message based on the error code
            switch (errorCode) {
                case "auth/invalid-email":
                    dispatch(saveErrorMessage("This email address is invalid."))
                    break
                case "auth/user-disabled":
                    dispatch(saveErrorMessage(
                        "This email address is disabled by the administrator."))
                    break
                case "auth/user-not-found":
                    dispatch(saveErrorMessage("This email address is not registered."))
                    break
                case "auth/wrong-password":
                    dispatch(saveErrorMessage("The password is invalid."))
                    break
                case "auth/missing-password":
                    dispatch(saveErrorMessage("The password is missing."))
                    break
                default:
                    dispatch(saveErrorMessage(error.message))
                    break
            }

            // Reset form fields
            setPassword("")
            dispatch(setLoading(false))
        }
    }

    const handleGoogleSignIn = async () => {
        dispatch(setLoading(true))

        try {
            // Sign in with Google
            const userCredential = await signInUsingGooglePopup()
            const user = userCredential.user
            dispatch(saveUser(user))

            reset()

            navigate("/")
        } catch (error) {
            //handle error
            dispatch(saveErrorCode(error.code))
            dispatch(saveError(true))

            // display specific error message based on the error code
            switch (errorCode) {
                case "auth/operation-not-allowed":
                    dispatch(saveErrorMessage("Email/password accounts are not enabled."))
                    break
                case "auth/operation-not-supported-in-this-environment":
                    dispatch(saveErrorMessage(
                        "HTTP protocol is not supported. Please use HTTPS."
                    ))
                    break
                case "auth/popup-blocked":
                    dispatch(saveErrorMessage(
                        "Popup has been blocked by the browser. Please allow popups for this website."
                    ))
                    break
                case "auth/popup-closed-by-user":
                    dispatch(saveErrorMessage(
                        "Popup has been closed by the user before finalizing the operation. Please try again."
                    ))
                    break
                default:
                    dispatch(saveErrorMessage(error.message))
                    break
            }
            dispatch(setLoading(false))
        }
    }

    return (
        <>
            {loading === false ? (
                <section className="my-auto">
                    <div className="m-auto flex flex-row items-center justify-center px-6 py-8 md:h-4/5 lg:py-0">
                        <div className="w-full rounded-lg bg-base-300 shadow sm:max-w-md">
                            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                    Sign in to your account
                                </h1>
                                <form
                                    className="space-y-4 md:space-y-6"
                                    action="#"
                                >
                                    <div>
                                        <label
                                            for="email"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            defaultValue={email}
                                            className="input w-full"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="password"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="••••••••"
                                            className="input w-full"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                    className="checkbox-primary checkbox"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label for="remember">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <Link
                                            to="/login"
                                            className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={onLogin}
                                        className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={handleGoogleSignIn}
                                        className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-info px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                    >
                                        GOOGLE
                                    </button>
                                    <p className="text-sm font-light">
                                        Don’t have an account yet?{" "}
                                        <Link
                                            to="/register"
                                            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </form>
                                {error === true && (
                                    <div
                                        role="alert"
                                        className="alert alert-error justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{errorMessage}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Login
