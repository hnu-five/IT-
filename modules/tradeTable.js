export default function getTableData(fre){
    fetch(`../data/${fre}.json`).then(res => {
        if(res.ok){
            return res.json()
        }
        return {value:[]}
    }).then(data => {
        setTableData(data)
    })
}

function setTableData(data){
    const dataTableE1 = document.querySelector('.data-table')
    let content = ''
    data.value.forEach(d => {
        const {date, clientName, clientSide, ticker, ric, size, price, notional, currency, sector, salesperson, hp} = d
        content += `<tr>
                        <td>${date}</td>
                        <td>${clientName}</td>
                        <td>${clientSide}</td>
                        <td>${ticker}</td>
                        <td>${ric}</td>
                        <td>${size}</td>
                        <td>${price}</td>
                        <td>${notional}</td>
                        <td>${currency}</td>
                        <td>${sector}</td>
                        <td>${salesperson}</td>
                        <td>${hp}</td>
                    </tr>`
    })
    dataTableE1.querySelector('tbody').innerHTML = content
    const {totalBuy, totalSell, quantity, buyNotional, sellNotional, netNotional} = data

    dataTableE1.querySelector('.total-buy+span').textContent = totalBuy
    dataTableE1.querySelector('.total-sell+span').textContent = totalSell
    dataTableE1.querySelector('.net-quantity+span').textContent = quantity
    dataTableE1.querySelector('.total-buy-notional+span').textContent = buyNotional
    dataTableE1.querySelector('.total-sell-notional+span').textContent = sellNotional
    dataTableE1.querySelector('.net-notional+span').textContent = netNotional
    dataTableE1.querySelector('.records+span').textContent = data.value.length
}