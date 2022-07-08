import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: '',
    firstName: '',
    lastName: ''
  },
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer