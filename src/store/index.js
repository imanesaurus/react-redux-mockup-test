import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/loginSlice';
import userReducer from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
});

export default store;
