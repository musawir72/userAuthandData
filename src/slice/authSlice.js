import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActio'


// initialize userToken from local storage
const userInfo = JSON.parse(localStorage.getItem('userInfo'))
 

const initialState = {
  loading: false,
  userInfo,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userInfo') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.error = null
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer