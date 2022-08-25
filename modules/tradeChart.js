export default function getChartData(fre){
    fetch(`../data/${fre}.json`).then(res => {
        if(res.ok){
            return res.json()
        }
        return {value:[]}
    }).then(data => {
        setChartData(data)
    })


    
}

function setChartData(data){
    var chartDate = data.chartDate;
    var chartBuy = data.chartBuy;
    var chartSell = data.chartSell;
    var chartTotal = data.chartTotal;
    var chart = Highcharts.chart('container',{
        chart: {
            type: 'column',
            backgroundColor: '#10161D',
            style: {
                fontFamily: "sans-serif",
                fontSize: '12px'
            }
        },
        title: {
            text: 'Flow Analysis',
            align:"left",
            style: {
                fontFamily: "sans-serif",
                color:'white',               
            }
        },
        xAxis: {
            gridLineColor: '#17202A',
            gridLineWidth: 1,
            //数据1
            categories: chartDate,
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
                //enabled: true,
                // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                    textOutline: '1px 1px black',
                    fontFamily: "sans-serif",
                }
            }
        }
         },
        series: [
            {
                name: 'Buy',
                //数据2
                data: chartBuy,
                color:"#00B0B9",
                showInLegend: false
            },
            {
                name: 'Sell',
                //数据3
                data: chartSell,
                color:"#06848D",
                showInLegend: false
            },
            {
                name: 'Cumulative Net',
                type : 'line',
                //数据4
                data: chartTotal,
                color:"rgb(248, 140, 0)",
                showInLegend: true
            }
        ]
    });
}