import { createSlice } from '@reduxjs/toolkit'

export const invoiceReducer = createSlice({
    name: "invoice",
    initialState: {
        isInvoiceModalOpen: false
    },
    reducers: {
        setIsInvoiceModalOpen: state => {
            state.isInvoiceModalOpen = !state.isInvoiceModalOpen
        }
    }
})

export const { setIsInvoiceModalOpen } = invoiceReducer.actions

export default invoiceReducer.reducer