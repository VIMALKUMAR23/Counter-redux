import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterApp",
  //intial state

  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, data) => {
      if (!data.payload) {
        state.value += 1;
      } else {
        state.value += data.payload;
      }
    },
    decrement: (state, data) => {
      if (!data.payload) {
        state.value -= 1;
      } else {
        state.value -= data.payload;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
