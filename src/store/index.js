import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/loginSlice';
import userReducer from '../reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer
  },
})