import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dragId: undefined,
}

export const dragSlice = createSlice({
  name: 'drag',
  initialState,
  reducers: {
    setDragId: (state, action) => {
      state.dragId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDragId } = dragSlice.actions

export default dragSlice.reducer