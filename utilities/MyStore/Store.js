import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'


export const store = configureStore({
  reducer: {
    reduxData: ReduxSlice,
    
  },
})