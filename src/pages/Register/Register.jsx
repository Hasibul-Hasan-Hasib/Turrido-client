import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Auth from "../../hooks/useAuth"
import Loading from "../../shared/loading/Loading"
import { useDispatch, useSelector } from "react-redux"
import { saveError, saveErrorCode, saveErrorMessage, saveUser, setLoading } from "../../features/auth/userAuthSlice"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading,errorMessage, errorCode, error } = useSelector((state) => state.auth)

    const {
        auth,
        createUserWithEmailAndPassword,
    } = Auth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const reset = () => {
        setEmail("")
        setPassword("")
        dispatch(saveError(false))
        dispatch(saveErrorMessage(""))
        dispatch(setLoading(false))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(setLoading(true))

        if (password === confirmPassword) {
            try {
                // create a new user with email and password
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                )

                // Pull out user's data from the userCredential property
                const user = userCredential.user
                dispatch(saveUser(user))
                reset()

                navigate("/")
            } catch (error) {
                // Handle errors here
                dispatch(saveError(true))
                dispatch(saveErrorCode(error.message))

                // Display appropriate error message based on the error code
                switch (errorCode) {
                    case "auth/weak-password":
                        dispatch(saveErrorMessage("The password is too weak."))
                        break
                    case "auth/email-already-in-use":
                        dispatch(saveErrorMessage(
                            "This email address is already in use by another account."
                        ))
                        break
                    case "auth/invalid-email":
                        dispatch(saveErrorMessage("This email address is invalid."))
                        break
                    case "auth/operation-not-allowed":
                        dispatch(saveErrorMessage(
                            "Email/password accounts are not enabled.",
                        ))
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
                setConfirmPassword("")
                dispatch(setLoading(false))
            }
        } else {
            dispatch(saveErrorMessage("Passwords do not match."))
            dispatch(setLoading(false))
        }
    }

    return (
        <>
            {loading === false ? (
                <section>
                    <div className="my-20 mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
                        <div className="w-full rounded-lg bg-base-300 shadow sm:max-w-md">
                            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                    Create and account
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
                                    <div>
                                        <label
                                            for="confirm-password"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            id="confirm-password"
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="••••••••"
                                            className="input w-full"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className="checkbox-primary checkbox"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                for="terms"
                                                className="font-light"
                                            >
                                                I accept the{" "}
                                                <a
                                                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-secondary w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white duration-200 focus:outline-none focus:ring-4"
                                        onClick={handleSubmit}
                                    >
                                        Create an account
                                    </button>
                                    <p className="text-sm font-light">
                                        Already have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                                        >
                                            Login here
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

export default Register
