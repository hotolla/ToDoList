import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskReducer'

export const store = configureStore({
  reducer: {
      newTask: taskReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
