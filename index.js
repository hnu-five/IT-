import React from "react"
import {render} from "react-dom"
import App from './container/app'
import './css/pratice.css'

function init(){
    const container = document.querySelector('#container')
    render(<App />, container)
}

init()

if(module.hot){
    module.hot.accept()
}