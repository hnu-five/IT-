import React, {useEffect, useState} from "react"
import TradeView from './tradeView'
import TableView from "./tableView"
import ChartView from "./chartView"

export default function App(props){
    const [fre, setFre] = useState('1D')
    const [tableData, setTableData] = useState({value: []})
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        fetch(`./data/${fre}.json`).then(res => {
            if(res.ok){
                return res.json()
            }
            return {value:[]}
        }).then(data => {
            setTableData(data)
        })
    }, [fre])

    useEffect(() => {
        fetch(`./data/${fre}.json`).then(res => {
            if(res.ok){
                return res.json()
            }
            return {value:[]}
        }).then(data => {
            setChartData(data)
        })
    }, [fre])

    // const tablePost = {
    //     'gap' : fre
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:8081/trade/showTable`,{
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify(tablePost)
    //     }).then(res => {
    //         if(res.ok){
    //             return res.json()
    //         }
    //         return {value:[]}
    //     }).then(data => {
    //         setTableData(data)
    //         console.log("table数据",data)
    //     })
    // }, [fre])

    // let startTime = "", endTime = ""
    // let gap = 0

    // useEffect(() => {
    //     getNowDate()
    //     console.log("start",startTime)
    //     console.log("end",endTime)
    //     const graphPost = {
    //         'startTime' : startTime,
    //         'endTime' : endTime
    //     }
    //     fetch(`http://localhost:8081/trade/showGraph`,{
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify(graphPost)
    //     }).then(res => {
    //         if(res.ok){
    //             return res.json()
    //         }
    //         return {value:[]}
    //     }).then(data => {
    //         setChartData(data)
    //         console.log("graph数据",data)
    //     })
    // }, [fre])

    // function getNowDate(){
    //     let date = new Date();
    //     startTime = calculateDate(date)
    //     switch(fre){
    //         case '1D':
    //             gap = 1
    //             break
    //         case '1W':
    //             gap = 7
    //             break
    //         case '2W':
    //             gap = 14
    //             break
    //         case '1M':
    //             gap = 30
    //             break
    //         case '3M':
    //             gap = 90
    //             break
    //         case '6M':
    //             gap = 180
    //             break
    //         case '1Y':
    //             gap = 365
    //             break
    //         default:
    //             break
    //     }
    //     date.setDate(date.getDate() - gap)
    //     endTime = calculateDate(date)
    // }

    // function calculateDate(date){
    //     let seperator1 = "-";
    //     let year = date.getFullYear();
    //     let month = date.getMonth() + 1;
    //     let strDate = date.getDate();
    //     if (month >= 1 && month <= 9) {
    //         month = "0" + month;
    //     }
    //     if (strDate >= 0 && strDate <= 9) {
    //         strDate = "0" + strDate;
    //     }
    //     let currentdate = year + seperator1 + month + seperator1 + strDate;
    //     return currentdate;
    // }

    function selectFre(fre) {
        setFre(fre)
    }

    return <>
        <TradeView /> 
        <TableView fre={fre} selectFre={selectFre} tableData={tableData}/>
        <ChartView chartData={chartData}/>
    </>
}