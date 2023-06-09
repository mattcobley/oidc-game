import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  level1: {
    ["get-request"]: false,
    ["auth-endpoint"]: false,
    ["client-id"]: false,
    ["redirect-uri"]: false,
    ["token-response"]: false,
    ["scopes"]: false,
  }
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { levelId, answerName } = action.payload
      state[levelId][answerName] = true
    },
    resetLevel: (state, action) => {
      const { levelId } = action.payload
      Object.keys(state[levelId]).forEach(answerName => {
        state[levelId][answerName] = false
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAnswer, resetLevel } = answerSlice.actions

export default answerSlice.reducer