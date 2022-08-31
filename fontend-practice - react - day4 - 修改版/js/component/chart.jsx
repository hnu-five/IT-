import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export default function Chart(props) {
    return <HighchartsReact
                highcharts={Highcharts}
                options={props.chartOptions}
                allowChartUpdate={true}
                immutable={true}
                containerProps = {{className: 'chart' }}
            />
}