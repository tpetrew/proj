import { configureStore } from '@reduxjs/toolkit'
import graphicReducer from './graphicReducer'

export default configureStore({
  reducer: {
    graphic: graphicReducer
  }
})