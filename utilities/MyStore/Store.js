import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'
import StudentStore from './StudentStore'


export const store = configureStore({
  reducer: {
    reduxData: ReduxSlice,
    studentList:StudentStore
    
  },
})