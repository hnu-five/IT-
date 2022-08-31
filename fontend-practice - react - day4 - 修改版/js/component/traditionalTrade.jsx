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
        else if(tradeE1 === "trade-btn trade-check") {
            if(tradeData.ric == ''){
                alert("请检查ric输入是否完整！")
                return
            } else {
                const ric = tradeData.ric
                fetch(`http://121.37.66.218:8081/shares/price/${ric}`,{
                    method: 'GET'
                }).then(res => res.json()).then(data => {
                    alert("价格查询" + data.message)
                    console.log(data)
                    const priceEl = document.querySelector('#Price')
                    const currencyEl = document.querySelector('#Currency')
                    priceEl.value = data.data.price
                    currencyEl.value = data.data.currency_name
                    tradeData.price = data.data.price
                    tradeData.currency = data.data.currency_name
                })
                return 
            }
          
            }           
           

        if(tradeData.client_name == ''||tradeData.client_side == ''||tradeData.currency == ''||tradeData.ticker == ''||tradeData.ric == ''||tradeData.size == ''||tradeData.price == ''||tradeData.issuer_sector == ''||tradeData.salesperson == '') 
        {
            alert("请检查输入是否完整！")
        } else {
            //console.log(tradeData)
            fetch(`http://121.37.66.218:8081/transaction_records`,{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(tradeData)
            }).then(res => res.json()).then(data => {
                alert(data.message)
                console.log(data)
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
            <button className="trade-btn trade-check" onClick={onClickHandler}>Check</button>
            <button className="trade-btn trade-buy" onClick={onClickHandler}>Buy</button>
            <button className="trade-btn trade-sell" onClick={onClickHandler}>Sell</button>
        </div>
    </div>
}