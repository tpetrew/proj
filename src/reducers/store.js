import { configureStore } from '@reduxjs/toolkit'
import graphicReducer from './graphicReducer'
import bankCardReducer from './bankCardReducer'

export default configureStore({
  reducer: {
    graphic: graphicReducer,
    bankCard: bankCardReducer
  }
})