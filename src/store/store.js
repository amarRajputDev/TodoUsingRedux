import { configureStore } from '@reduxjs/toolkit'
import todoreducer from './Todoslice'

export const store = configureStore({
  reducer: todoreducer
})