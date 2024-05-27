// A Slice is a collection of variables that are accumulated in the store. While segregating them while developing

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // I can either return a new State object
    login: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: false,
          username: action.payload,
          uid: "",
          isModerator: false,
        },
      };
    },
    // or I can just mutate the state object like this
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

// Export the actions
export const { login } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
