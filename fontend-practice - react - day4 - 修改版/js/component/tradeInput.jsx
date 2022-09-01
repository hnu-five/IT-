import React,{useState} from 'react'

export default function TradeInput(props) {
    let tradeData = props.tradeData
    let setTradeData = props.setTradeData 

   
    function inputChange(e){
        const val = e.target.value
        switch(props.label){
            case 'Client Name':
                tradeData.client_name = val
                break
            case 'Ticker':
                tradeData.ticker = val
                break
            case 'RIC':
                tradeData.ric = val
                break
            case 'Size':
                tradeData.size = val
                break
            case 'Price':
                tradeData.price = val
                break
            case 'Currency':
                tradeData.currency = val
                break
            case 'Issue Sector':
                tradeData.issuer_sector = val
                break
            case 'Salesperson':
                tradeData.salesperson = val
                break
            case 'HT/PT':
                if(val == 'HT') {
                    tradeData.ht_pt = 1
                } else{
                    tradeData.ht_pt = 0
                }
                break
            default:
                break
        }
        setTradeData(tradeData)
    }
    return <>{props.type == 'input' ?
                (<div className="trade-input-item">
                    <div className="trade-input-title">{props.label}</div>
                    <input id={props.label} className="trade-input" placeholder="text input" readOnly={props.readOnly} onChange={inputChange}/>
                </div>) : 
                (<div>
                    <div className="trade-input-title">{props.label}</div>
                    <select className="trade-input" onChange={inputChange} >
                        {
                            props.options.map(opt => <option key={opt} >{opt}</option>)
                        }
                    </select>
                </div>)}
    </>
}