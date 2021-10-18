import { createSlice } from '@reduxjs/toolkit'

export const graphicReducer = createSlice({
  name: 'graphic',
  initialState: {
    type: 0,
    data: [
        {
            id: 0,
            name: "Total income",
            points: [0, 200, 50, 300, 100, 320, 150, 400, 200, 490, 250, 200, 300, 400, 350, 450, 400, 290, 450, 100, 500, 300, 550, 350, 600, 250, 650, 190, 700, 390, 750, 190, 800, 230, 850, 180, 900, 310, 950, 360, 1000, 100]
        },
        {
            id: 1,
            name: "Total outcome",
            points: [0, 300, 50, 200, 100, 220, 150, 300, 200, 290, 250, 200, 300, 100, 350, 450, 400, 190, 450, 100, 500, 400, 550, 300, 600, 200, 650, 220, 700, 300, 750, 290, 800, 200, 850, 100, 900, 450, 950, 190, 1000, 100]
        },
        {
            id: 2,
            name: "Investment",
            points: [0, 500, 50, 400, 100, 420, 150, 100, 200, 390, 250, 400, 300, 200, 350, 250, 400, 190, 450, 300, 500, 400, 550, 400, 600, 420, 650, 100, 700, 390, 750, 400, 800, 200, 850, 250, 900, 190, 950, 300, 1000, 350]
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