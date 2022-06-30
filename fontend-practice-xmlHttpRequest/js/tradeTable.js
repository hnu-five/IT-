
export default function getTableData(fre) {  

    const url = `../data/${fre}.json`;     
          
    //1.创建XMLHttpRequest组建  
    const xmlHttpRequest = new XMLHttpRequest();  
      
    //2.设置回调函数  
    xmlHttpRequest.onreadystatechange = function() {
        if(xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200) {  
            const data = JSON.parse(xmlHttpRequest.responseText);  
            setTableData(data)
        }  
    };  

    //3.初始化XMLHttpRequest组建  
    xmlHttpRequest.open("GET",url,true);  

    //4.发送请求  
    xmlHttpRequest.send(null);    
}     



function setTableData(data) {
    const dataTableEl = document.querySelector('.data-table')
    let content =''
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

    dataTableEl.querySelector('tbody').innerHTML = content
    const {totalBuy, totalSell, quantity, buyNotional, sellNotional, netNotional} = data

    dataTableEl.querySelector('.total-buy+span').textContent = totalBuy
    dataTableEl.querySelector('.total-sell+span').textContent = totalSell
    dataTableEl.querySelector('.net-quantity+span').textContent = quantity
    dataTableEl.querySelector('.total-buy-notional+span').textContent = buyNotional
    dataTableEl.querySelector('.total-sell-notional+span').textContent = sellNotional
    dataTableEl.querySelector('.net-notional+span').textContent = netNotional
    //dataTableEl.querySelector('.data-summary').textContent = data.value.length
}