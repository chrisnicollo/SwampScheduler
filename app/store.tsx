import { configureStore } from '@reduxjs/toolkit'
import hoverInfoReducer from './src/reducers/hoverInfoSlice.tsx'

export default configureStore({
  reducer: {
    hoverInfo: hoverInfoReducer,
  },
});