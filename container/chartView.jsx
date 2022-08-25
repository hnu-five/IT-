import React from "react"
import Chart from '../component/chart'

export default function ChartView(props){
    return <>
        <div className="sperate-line"></div>
        <Chart chartData={props.chartData}/>
    </>
}
