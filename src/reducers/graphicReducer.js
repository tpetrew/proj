import { createSlice } from '@reduxjs/toolkit'

export const graphicReducer = createSlice({
  name: 'graphic',
  initialState: {
    type: 0,
    data: [
        {
            id: 0,
            name: "outcome"
        },
        {
            id: 1,
            name: "income"
        },
        {
            id: 2,
            name: "state"
        }
    ]
  },
  reducers: {
    setGraphicType: (state, action) => {
      state.type = action.payload
    },
    getGraphicData: state => {
        return state.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { setGraphicType, getGraphicData } = graphicReducer.actions

export default graphicReducer.reducer