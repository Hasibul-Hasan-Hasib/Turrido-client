import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    error: false,
    errorCode: "",
    errorMessage: "",
    token: "",
    loading: false,
}

const userAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUser(state, action) {
            state.user = action.payload
        },
        saveError(state, action) {
            state.error = action.payload
        },
        saveErrorCode(state, action) {
            state.errorCode = action.payload
        },
        saveErrorMessage(state, action) {
            state.errorMessage = action.payload
        },
        saveToken(state, action) {
            state.token = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
},
)


export const { saveUser, saveError,saveErrorCode, saveErrorMessage, setLoading, saveToken } = userAuthSlice.actions


export default userAuthSlice.reducer