import { createSlice } from '@reduxjs/toolkit'
// import { stat } from 'react-native-fs'

const initialState = {
    value: 0,
    loginData:{}
  }

export const ReduxSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoginData:(state,action)=>{
      state.loginData=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoginData } = ReduxSlice.actions

export default ReduxSlice.reducer