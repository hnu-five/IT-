import selectTradeType from "./tradeType.js"
import selectWindow from "./tradeWindow.js"
import getTableData from "./tradeTable.js"

//import '../index.css'
//import '../css/table.css'
//import '../css/trade.css'
//import '../css/frequency.css'

function init() {
    const tradeType = document.querySelector('.trade-type')
    tradeType.addEventListener('click',(evt) => {
        selectTradeType(evt)
    })

    const freGroup = document.querySelector('.fre-group')
    freGroup.addEventListener('click', (evt) => {
        const v = selectWindow(evt)
        getTableData(v)
    })

    getTableData('1D')
}

init()

if (module.hot) {
    module.hot.accept()
}