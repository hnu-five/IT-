import React from 'react'
import { useSelector } from 'react-redux'
import SummaryItem from './summaryItem'

export default function Table(props) {

    const tableData = props.tableData.data.list || []
    const summary = props.tableData.data || {}
    //const data = useSelector(state => state.table.data)  
    //const tableData = tableData.data.list || []
    //const summary = tableData.data || {}

    console.log(tableData)

    return <div className="data-table">
        <table>
            <thead>
                    <tr>
                        <th>Date</th>
                        <th>Client Name</th>
                        <th>Client Side</th>
                        <th>Ticker</th>
                        <th>RIC</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Notional USD</th>
                        <th>Currency</th>
                        <th>Issuer Sector</th>
                        <th>Salesperson</th>
                        <th>HT/PT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item,index) => {
                            return (
                                <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.client_name}</td>
                                <td className={item.client_side == "buy" ? "total-buy":"total-sell"}>{item.client_side}</td>
                                <td>{item.ticker}</td>
                                <td>{item.ric}</td>
                                <td className={item.client_side == "buy" ? "total-buy":"total-sell"}>{item.size}</td>
                                <td>{item.price}</td>
                                <td>{item.notional_usd} USD</td>
                                <td>{item.currency}</td>
                                <td>{item.issuer_sector}</td>
                                <td>{item.salesperson}</td>
                                <td>{item.ht_pt == 1 ? 'HT' : 'PT'}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
        </table>
        <div className="data-summary">
            <div className="summary-items">
                {/* <SummaryItem label="Total Buy" value={summary.totalBuy} className='total-buy'/>
                <SummaryItem label="Total Sell" value={summary.totalSell} className='total-sell'/>
                <SummaryItem label="Net Quantity" value={summary.quantity} className='net-quantity'/>
                <SummaryItem label="Total Buy Notional" value={summary.buyNotional} className='total-buy-notional'/>
                <SummaryItem label="Total Sell Notional" value={summary.sellNotional} className='total-sell-notional'/>
                <SummaryItem label="Net Notional" value={summary.netNotional} className='net-notional'/>   
                <SummaryItem label="Total Records" value={tableData.length} className='records'/>  */}   
                <SummaryItem label="Total Buy" value={summary.total_buy} className='total-buy'/>
                <SummaryItem label="Total Sell" value={summary.total_sell} className='total-sell'/>
                <SummaryItem label="Net Quantity" value={summary.quantity} className='net-quantity'/>
                <SummaryItem label="Total Buy Notional" value={summary.buy_notional} className='total-buy-notional'/>
                <SummaryItem label="Total Sell Notional" value={summary.sell_notional} className='total-sell-notional'/>
                <SummaryItem label="Net Notional" value={summary.net_notional} className='net-notional'/>   
                <SummaryItem label="Total Records" value={tableData.length} className='records'/>   
            </div>
              
        </div>
    </div>
}