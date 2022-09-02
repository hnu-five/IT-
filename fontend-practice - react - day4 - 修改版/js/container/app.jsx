import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TradeView from './tradeView'
import TableView from './tableView'
import ChartView from './chartView'

import { setFrequency } from '../reducer/freReducer'
import { fetchTableData } from '../reducer/tableReducer'
import { fetchChartData } from '../reducer/chartReducer'

export default function App(props) {
    //const [fre,setFre] = useState('1D')
    //const [tableData,setTableData] = useState({value:[]})
    //const [tableData,setTableData] = useState({value:[]})

    const dispatch = useDispatch()
    const fre = useSelector(state => state.frequency.value)
    const tableData = useSelector(state => state.table.data)
    const chartData = useSelector(state => state.chart.data)

    useEffect(() => {
        selectFre(fre)
    },[]) 

    /* useEffect(() => {
        fetch(`../../data/${fre}.json`).then(res => {
            if(res.ok) {
                return res.json()
            }

            return {value :[],}
        }).then(data => {
            setTableData(data)
        })
    },[fre]) */

    function selectFre(fre) {
        dispatch(setFrequency(fre))
        dispatch(fetchTableData(fre))
        dispatch(fetchChartData(fre))
    } 

return (
    <div>
    <TradeView />
    <TableView fre={fre} selectFre={selectFre} tableData={tableData}/>
    <ChartView chartData={chartData} />
    </div>
);
   
}
