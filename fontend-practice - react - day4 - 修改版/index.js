import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './js/store/createStore'


import App from './js/container/app'

import './css/frequency.css'
import './css/trade.css'
import './css/table.css'
import './css/chart.css'

function init() {
    const store = createStore()
    const containerEl = document.querySelector('#container')
    render(<Provider store={store}><App /></Provider>, containerEl)
    //render(<App />, containerEl)
}

init()

if (module.hot) {
    module.hot.accept()
}
