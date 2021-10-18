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

// Action creators are generated for each case reducer function
export const { setBankCardStyle, setBankCardStyleModalVisible } = bankCardReducer.actions

export default bankCardReducer.reducer