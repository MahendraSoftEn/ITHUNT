import { createSlice } from '@reduxjs/toolkit'
// import { stat } from 'react-native-fs'

const initialState = {
    value: 0,
    studentData:[]
  }

export const StudentStore = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setStudentData:(state,action)=>{
      state.studentData=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStudentData } = StudentStore.actions

export default StudentStore.reducer