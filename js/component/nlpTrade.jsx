import React, { useState } from 'react'

export default function NLPTrade(props) {
    const [tradeNlpData, setTradeNlpData] = useState(
        {
            'text': ''
        }
    )
    const [nlpResponse] = useState(
        {
            "client_side": '',
            "ticker": '',
            "size": ''
        }
    )
    function onClickHandler(evt) {
        const nlpSentence = document.querySelector('#nlpSentence')
        tradeNlpData.text = nlpSentence.value
        console.log("nlpSentence: " + nlpSentence.value)
        console.log("tradeNlpData.text:" + tradeNlpData.text)
        fetch(`http://127.0.0.1:5000/process/nlp/request`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(tradeNlpData)
        }).then(res => res.json()).then(data => {
            nlpResponse.client_side=data.OPERATMODE
            nlpResponse.ticker=data.TICKER
            nlpResponse.size=data.NOTIONAL
            fetch(`http://121.37.66.218:8081/transaction_records/nlp`,{
                method:'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(nlpResponse)
            }).then(res => res.json()).then(data => {
                alert(data.message)
            })
        })
    }
    return <div className='trade-nlp' style={{ display: 'none' }}>
        <div className='trade-input-item'>
            <div className='trade-input-title' >NLP Trade</div>
            {/* <input className='trade-input' placeholder='text input'/> */}
            <input className='trade-input' id='nlpSentence' placeholder='text input' style={{ width: 320 }} />
        </div>
        <div className='trade-submit-btns'>
            <button className='trade-btn trade-go' onClick={onClickHandler}>Go</button>
        </div>
    </div>
}