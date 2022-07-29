import { createSlice } from '@reduxjs/toolkit'

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: {
    value: [],
  },
  reducers: {
    set_breeds: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set_breeds } = breedsSlice.actions

export default breedsSlice.reducer