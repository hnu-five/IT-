export default function selectTradeType(evt){
    console.log(evt)
    const tradeTypeE1 = evt.currentTarget   
    const activeE1 = tradeTypeE1.querySelector('.trade-type-item.active')  
    if(activeE1) {
        activeE1.classList.remove('active')
        const type = activeE1.dataset.value
        document.querySelector(`.trade-${type}`).style.display = 'none'
    }

    const itemE1 = evt.target
    itemE1.classList.add('active')
    const type = itemE1.dataset.value
    document.querySelector(`.trade-${type}`).style.display = 'flex'
}