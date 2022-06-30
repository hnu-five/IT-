// 第二个标签栏点击事件
function secondchoose() {

    const tabs_sec = document.getElementsByClassName("fre-group")[0];
    tabs_sec.addEventListener("click", (event) => {
        const selected = event.target.dataset.value;
        const items = Array.from(document.getElementsByClassName("fre-item"));
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index == selected) {
                item.classList.add("active");
            }
        });
        deletetable();
        for (let i = 0; i < Math.round(Math.random() * 3 + 1); i++) {
            addtable();
        }

    });
}

function deletetable() {
    var table = document.getElementById('excel');
    var rowCount = table.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table.deleteRow(i);
        rowCount = rowCount - 1;
        i = i - 1;
    }
}


function addtable() {
    let table = document.getElementById("excel"); //找到表格
    let data = [{
            'date': 'Date',
            'clientName': 'Client Name',
            'ticker': 'Ticker',
            'ric': 'RIC',
            'price': 'Price',
            'notionalUSD': '1,300.78',
            'currency': 'Currency',
            'issuerSector': 'Issuer Sector',
            'salesperson': 'Salesperson',
            'type': 'HT',
            'clientSide': 'Buy',
            'size': '12'
        },
        {
            'date': 'Date',
            'clientName': 'lily',
            'ticker': 'Ticker',
            'ric': 'RIC',
            'price': 'Price',
            'notionalUSD': '1,300.78',
            'currency': 'Currency',
            'issuerSector': 'Issuer Sector',
            'salesperson': 'Salesperson',
            'type': 'HT',
            'clientSide': 'Sell',
            'size': '12'
        },

    ];

    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement('tr'); //创建tr(表格的行)
        var name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].date;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].clientName;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].clientSide;
        if (data[i].clientSide === 'Buy') {
            name.style.color = 'rgb(8,154,81)'
        } else if (data[i].clientSide === 'Sell') {
            name.style.color = 'rgb(186,95,94)'
        }

        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].ticker;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].ric;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].price;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].size;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].notionalUSD;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].currency;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].issuerSector;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].salesperson;
        name = document.createElement("td"); //创建td(表格的列)
        table.appendChild(tr); //向表格里添加行
        tr.appendChild(name); //向表格新建的行添加列
        name.innerText = data[i].type;

    }

}

secondchoose();
addtable();