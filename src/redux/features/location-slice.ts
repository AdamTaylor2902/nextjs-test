import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: LocationState;
};

type LocationState = {
  path: string;
};

const initialState = {
  value: {
    path: "/",
  } as LocationState,
} as InitialState;

export const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    updatePath: (state, action: PayloadAction<string>) => {
      state.value.path = action.payload;
    },
  },
});

// Export the actions
export const { updatePath } = locationSlice.actions;

// Export the reducer
export default locationSlice.reducer;
