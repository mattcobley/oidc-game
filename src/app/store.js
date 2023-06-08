import { configureStore } from '@reduxjs/toolkit'
import dragReducer from './dragSlice'

export const store = configureStore({
  reducer: {
    drag: dragReducer
  },
})