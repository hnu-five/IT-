import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTableData = createAsyncThunk('table/fetch', async (fre,{dispatch}) => {
    const tablePost = {
        'gap' : fre
    }
    const res = await fetch(`/trade/showTable`,{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(tablePost)
            })

    let data = {value: []}
    if(res.ok){
        data = await res.json()
        console.log("数据：",data)
    }
    return data
})

const tableReducer = createSlice({
    name: 'table',
    initialState: {data: {value: []}, loading: false},
    reducers: {
        setTableData(state,action) {
            state.data = action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchTableData.pending, (state,action) => {
            state.loading = true
        })
        .addCase(fetchTableData.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchTableData.rejected, (state,action) => {
            state.loading = false
        })
    }
})

export const {setTableData} = tableReducer.actions

export default tableReducer.reducer