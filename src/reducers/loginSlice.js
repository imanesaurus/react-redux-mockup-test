import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formInValid: false,
    isLogin: false,
    errorMessage: ''
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setFormInValid: (state, action) => {
            state.formInValid = action.payload
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload
        },
        resetForm: (state, action) => {
            state.errorMessage = ""
            state.formInValid = false
        }
    },
})

export const { setIsLogin, setFormInValid, setErrorMessage, resetForm } = loginSlice.actions

export default loginSlice.reducer