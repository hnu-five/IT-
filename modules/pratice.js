import selectTradeType from "./tradeType.js"
import selectWindow from "./tradeWindow.js"
import getTableData from "./tradeTable.js"
import getChartData from "./tradeChart.js"

import '../css/pratice.css'

function init(){
    const freGroup = document.querySelector('.fre-group')
    freGroup.addEventListener('click',(evt) => {
        const v = selectWindow(evt)
        console.log(v)
        getChartData(v)
        getTableData(v)
    })

    const tradeType = document.querySelector('.trade-type')  
    tradeType.addEventListener('click',(evt) => {
        selectTradeType(evt)
    })

    getTableData('1D')
    getChartData('1D')
}

init()

if(module.hot){
    module.hot.accept()
}