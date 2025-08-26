import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateAge, updateName } from "../../features/user/userSlice"

const Users = () => {
    const { name, age } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(updateName("hasib"))}>
                Set Name
            </button>
            <button onClick={() => dispatch(updateAge("10"))}>Set Age</button>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default Users
