import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    userName: '',
  },
};

const defaultState = {
  user: {
    id: '',
    userName: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = defaultState.user;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
