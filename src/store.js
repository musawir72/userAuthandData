import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice";


const reducer = {
  user: authReducer,
}

const store = configureStore({
  reducer,
})

export default store;