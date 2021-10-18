import { createSlice } from '@reduxjs/toolkit'

export const bankCardReducer = createSlice({
  name: 'bankCard',
  initialState: {
    style: "blue",
    isSetStyleModalVisible: false
  },
  reducers: {
    setBankCardStyle: (state, action) => {
      state.style = action.payload
    },
    setBankCardStyleModalVisible: state => {
        state.isSetStyleModalVisible = !state.isSetStyleModalVisible
      }
  }
})

export const { setBankCardStyle, setBankCardStyleModalVisible } = bankCardReducer.actions

export default bankCardReducer.reducer