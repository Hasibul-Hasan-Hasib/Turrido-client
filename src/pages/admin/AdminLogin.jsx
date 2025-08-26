import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from "@mantine/core"
import { Link } from "react-router-dom"

function AdminLogin() {
    return (
        <section className="my-auto">
            <div className="m-auto flex flex-row items-center justify-center px-6 py-8 md:h-4/5 lg:py-0">
                <div className="w-full rounded-lg bg-base-300 shadow sm:max-w-md">
                    <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            Admin Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    for="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Your email
                                </label>
                                <input
                                    // type="email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    // defaultValue={email}
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
                                    // onChange={(e) =>
                                    //     setPassword(e.target.value)
                                    // }
                                    placeholder="••••••••"
                                    className="input w-full mb-5"
                                    required=""
                                />
                            </div>
                            <button
                                type="submit"
                                // onClick={onLogin}
                                className="btn btn-secondary w-full"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin
