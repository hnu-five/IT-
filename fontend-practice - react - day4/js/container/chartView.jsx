import React, {useLayoutEffect, useState, useRef} from 'react'
import { useSelector } from 'react-redux'
import Chart from '../component/chart'
import {CHART_OPTIONS} from '../utils/constants'

export default function ChartView(props) {
    //const data = useSelector(state => state.chart.data)
    const data = props.chartData ?.chart

    const [options, setOptions] = useState({})
    const containerRef = useRef()

    useLayoutEffect(() => {
        const chartData = data || {}
        const xValues = Object.keys(chartData)
        const buyValues = []
        const sellValues = []
        const cumulative = []
 
        xValues.forEach(x => {
            buyValues.push(chartData[x].buy)
            sellValues.push(-chartData[x].sell)
            cumulative.push(chartData[x]['Cumulative Net'])
        }) 

        const containerWidth = containerRef.current.offsetWidth
        const containerHeight = containerRef.current.offsetHeight
        const options = CHART_OPTIONS(containerWidth,containerHeight)
        options.xAxis.categories = xValues
        options.series[0].data = buyValues
        options.series[1].data = sellValues
        options.series[2].data = cumulative

      /*   console.log(xValues)
        console.log(buyValues)
        console.log(sellValues)
        console.log(cumulative)
 */

        console.log(options)
        setOptions(options)

    },[data])

    return <section className="chart-area">
        <div className="title">Flow Analysis</div>
        <div ref={containerRef}>
            <Chart chartOptions={options}/>
        </div>
    </section>

}
