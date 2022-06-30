export default function selectTradeType (evt) {
    const tradeTypeChoose = evt.currentTarget //get choosed type
    const activeChoose = tradeTypeChoose.querySelector('.trade-type-item.active') //if active?
    if(activeChoose) {
        activeChoose.classList.remove('active')
        const type = activeChoose.dataset.value
        document.querySelector(`.trade-${type}`).style.display = 'none' //change display = none
    }

    const itemChoose = evt.target //choosed one
    itemChoose.classList.add('active') //class add active
    const type = itemChoose.dataset.value  //get type
    document.querySelector(`.trade-${type}`).style.display = 'flex' //change display = flex

}