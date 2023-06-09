import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  level1: {
    1: {
      ["get-request"]: false,
      ["auth-endpoint"]: false,
      ["client-id"]: false,
      ["redirect-uri"]: false,
      ["token-response"]: false,
      ["scopes"]: false,
    },
    2: {
      ["consent"]: false,
      ["confirm"]: false,
    },
    3: {
      ["get-request"]: false,
      ["data-endpoint"]: false,
      ["access-token"]: false
    }
  }
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { levelId, stepId, answerName } = action.payload
      state[levelId][stepId][answerName] = true
    },
    resetLevel: (state, action) => {
      const { levelId } = action.payload
      state[levelId] = initialState[levelId]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAnswer, resetLevel } = answerSlice.actions

export default answerSlice.reducer