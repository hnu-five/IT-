import React from "react"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

export default function Chart(props){
    const chartData = props.chartData || []
    const options = {
        chart: {
            type: 'column',
            backgroundColor: '#10161D',
            style: {
                fontFamily: "sans-serif",
                fontSize: '12px',
            }
        },
        title: {
            text: 'Flow Analysis(流动曲线分析)',
            align:"left",
            style: {
                fontFamily: "sans-serif",
                color:'white',               
            }
        },
        xAxis: {
            gridLineColor: '#17202A',
            gridLineWidth: 1,
            categories: chartData.chartDate,
        },
        yAxis: {
            gridLineColor: '#17202A',
        },
        tooltip: {
        borderWidth: 1,
        borderColor: '#AAA',
        crosshairs: true,
        shared: true
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            x: -100,
            style: {
                color: 'white'
            }
        },
        plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            dataLabels: {
                style: {
                    textOutline: '1px 1px black',
                    fontFamily: "sans-serif",
                }
            }
        }
         },
        series: [
            {
                name: 'Buy',
                data: chartData.chartBuy,
                color:"#00B0B9",
                showInLegend: false
            },
            {
                name: 'Sell',
                data: chartData.chartSell,
                color:"#06848D",
                showInLegend: false
            },
            {
                name: 'Cumulative Net',
                type : 'line',
                data: chartData.chartTotal,
                color:"rgb(248, 140, 0)",
                showInLegend: true
            }
        ]
    }

    return <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
    />
}
