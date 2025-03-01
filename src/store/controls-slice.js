import { createSlice } from "@reduxjs/toolkit";

const initialStateCtrl = {
  ctrl: [true, true, true, true],
  loadingError: false,
};

const controlSlice = createSlice({
  name: "control",
  initialState: initialStateCtrl,
  reducers: {
    all: (state) => {
      if (state.ctrl.includes(false)) {
        return { ...state, ctrl: [true, true, true, true] };
      } else {
        return { ...state, ctrl: [false, false, false, false] };
      }
    },
    zero: (state) => {
      state.ctrl[0] = !state.ctrl[0];
    },
    one: (state) => {
      state.ctrl[1] = !state.ctrl[1];
    },
    two: (state) => {
      state.ctrl[2] = !state.ctrl[2];
    },
    three: (state) => {
      state.ctrl[3] = !state.ctrl[3];
    },
    setError: (state) => {
      state.loadingError = true;
    },
  },
});

export const controlActions = controlSlice.actions;

export default controlSlice.reducer;
