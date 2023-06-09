import { configureStore } from '@reduxjs/toolkit'
import dragReducer from './dragSlice'
import stepReducer from "./stepSlice"

export const store = configureStore({
  reducer: {
    drag: dragReducer,
    step: stepReducer
  },
})