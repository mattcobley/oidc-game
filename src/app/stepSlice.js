import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  level1: {
    stepId: 1
  }
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