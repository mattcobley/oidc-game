import { configureStore } from '@reduxjs/toolkit'
import dragReducer from './dragSlice'
import stepReducer from "./stepSlice"
import answerReducer from './answerSlice'

export const store = configureStore({
  reducer: {
    drag: dragReducer,
    step: stepReducer,
    answer: answerReducer,
  },
})