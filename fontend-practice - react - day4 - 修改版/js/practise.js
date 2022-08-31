import selectTradeType from "./tradeType.js"
import selectWindow from "./tradeWindow.js"
import getTableData from "./tradeTable.js"

//import '../index.css'

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
}

init()

if (module.hot) {
    module.hot.accept()
}