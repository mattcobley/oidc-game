import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dragId: undefined,
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setStepId: (state, action) => {
      const { levelId, stepId } = action.payload
      state[levelId].stepId = stepId
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStepId } = stepSlice.actions

export default stepSlice.reducer