import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
  },
  reducers: {
    set_categories: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set_categories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
