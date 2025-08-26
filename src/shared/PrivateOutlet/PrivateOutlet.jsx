import { LoadingOverlay } from "@mantine/core"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateOutlet = ({ type }) => {
    const { user, loading } = useSelector((state) => state.auth)

    if (loading) {
        return <LoadingOverlay visible={loading} overlayBlur={2} />
    }
    return user.email ? (
        <Outlet />
    ) : (
        <Navigate to={type === "admin" ? "/admin-login" : "/login"} />
    )
}

export default PrivateOutlet
