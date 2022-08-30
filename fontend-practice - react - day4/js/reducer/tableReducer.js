import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTableData = createAsyncThunk('table/fetch', async (fre, {dispatch}) => {
    const response = await fetch(`../../data/${fre}.json`)
    //加入接口
    //const response = await fetch(`http://127.0.0.1:8081/transaction_records/summary/${fre}`)
    //let data = {value: [], chart: {}}
    let data = { data: {} }
    if (response.ok) {
        data = await response.json()
    }
    
    return data

})

const tableReducer = createSlice({
    name:'table',
   // initialState:{data:{value: []},loading:false},
    initialState:{data:{data: {}},loading:false},
    reducers: {
        setTableData(state,action) {
            state.data = action.payload
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchTableData.pending,(state,action) => {
            state.loading = true
        })
          .addCase(fetchTableData.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
        })
          .addCase(fetchTableData.rejected,(state,action) => {
            state.loading = false
        })
    }

})

export const {setTableData} = tableReducer.actions

export default tableReducer.reducer