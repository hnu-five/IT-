import React,{useState} from 'react'
import TradeInput from "./tradeInput"
import '../../css/trade.css'

export default function TraditionalTrade(props) {

    const [tradeData,setTradeData] = useState(
        {
            'client_name' : '',
            "client_side": '',
            'ticker' : '',
            'ric' : '',
            'size' : '',
            'price' : '',
            'currency' : '',
            'issuer_sector' : '',
            'salesperson' : '',
            'ht_pt' : '1',
        }
    )

    function onClickHandler(evt) {
        const tradeE1 = evt.target.className

        if(tradeE1 === "trade-btn trade-buy") tradeData.client_side = "buy"
        else if(tradeE1 === "trade-btn trade-sell") tradeData.client_side = "sell"

        if(tradeData.client_name == ''||tradeData.client_side == ''||tradeData.currency == ''||tradeData.ticker == ''||tradeData.ric == ''||tradeData.size == ''||tradeData.price == ''||tradeData.issuer_sector == ''||tradeData.salesperson == '') 
        {
            alert("请检查输入是否完整！")
        } else {
            fetch(`http://localhost:8081/transaction_records`,{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(tradeData)
            }).then(res => {
                if(res.ok){
                    data = res.json()
                    alert(data.message)
                    return data
                }
            })
        }
        }

      

    return <div className="trade-traditional">
        <div className="trade-input-items">
            <TradeInput type="input" label="Client Name" tradeData={tradeData} setTradeData={setTradeData} />
            <TradeInput type="input" label="Ticker" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="RIC" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="Size" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="Price" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="Currency" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="Issue Sector" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="input" label="Salesperson" tradeData={tradeData} setTradeData={setTradeData}/>
            <TradeInput type="select" label="HT/PT" options={["HT","PT"]} tradeData={tradeData} setTradeData={setTradeData}/>
        </div>
        <div className="trade-submit-btns">
            <button className="trade-btn trade-buy" onClick={onClickHandler}>Buy</button>
            <button className="trade-btn trade-sell" onClick={onClickHandler}>Sell</button>
        </div>
    </div>
}