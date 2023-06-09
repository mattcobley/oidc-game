import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: ""
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    },
    resetText: (state) => {
      state.text = ""
    }
  },
})

// Action creators are generated for each case reducer function
export const { setText, resetText } = textSlice.actions

export default textSlice.reducer