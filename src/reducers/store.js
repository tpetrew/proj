import { configureStore } from '@reduxjs/toolkit'
import graphicReducer from './graphicReducer'
import bankCardReducer from './bankCardReducer'
import invoiceReducer from './invoiceReducer'

export default configureStore({
  reducer: {
    graphic: graphicReducer,
    bankCard: bankCardReducer,
    invoices: invoiceReducer
  }
})