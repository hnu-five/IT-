import React, {useState } from 'react'
import TradeItem from './tradeItem'
import '../../css/trade.css'


const ITEMS = [
    {value : 'traditional',label : 'Traditional Trade', active: true},
    {value : 'nlp',label : 'NLP Trade', active: false},
]

export default function TradeType(props){
    const {selectType} = props
    const [list, setList] = useState(ITEMS)

    function onClickHandler(evt) {
        const tradeE1 = evt.target
        const cur = tradeE1.dataset.value

        const change = ITEMS.map(item => {
            item.active = false
            if(item.value == cur){
                item.active = true
            }
            return item
        })

        let pre = ""
        if(ITEMS[0].value == cur) pre = ITEMS[1].value
        else pre = ITEMS[0].value     
        
        setList(change)

        if(selectType){
            selectType(pre,cur)
        }
    }

    return <div className = "trade-type" onClick={onClickHandler}>
        {
            list.map(item => {
                return <TradeItem key={item.value} {...item}/>
            })
        }
    </div>
}
