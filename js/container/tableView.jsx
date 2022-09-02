import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import FreGroup from '../component/FreGroup'
import Table from '../component/table'
import {discardElement} from 'highcharts'

export default function TableView(props) {

    const tableData = useSelector(state => state.table.data)  
    const fre = useSelector(state => state.frequency.value)

    useEffect(() => {
        discardElement
    },[fre])

    return <section className= 'table-area'>
        <FreGroup selectFre = {props.selectFre} fre = {fre} />
        <Table tableData = {tableData}/>
    </section>
}