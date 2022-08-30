import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchChartData = createAsyncThunk('chart/fetch', async (fre, {dispatch}) => {
    const response = await fetch(`../../chartData/${fre}.json`)
    //加入接口
    //const response = await fetch(`http://127.0.0.1:8081/history/${fre}`)
    let data = {data: [], chart: {}}
    if (response.ok) {
        data = await response.json()
    }
    
    return data

})

const chartReducer = createSlice({
    name:'chart',
    initialState:{data:{data: []},loading:false},
    reducers: {
        setChartData(state,action) {
            state.data = action.payload
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchChartData.pending,(state,action) => {
            state.loading = true
        })
          .addCase(fetchChartData.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
        })
          .addCase(fetchChartData.rejected,(state,action) => {
            state.loading = false
        })
    }

})

export const {setChartData} = chartReducer.actions

export default chartReducer.reducer