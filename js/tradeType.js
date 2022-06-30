// 交易类型点击切换
const freTableTabs = document.getElementsByClassName("trade-type")[0];
freTableTabs.addEventListener("click", (evt) => {
    document.getElementsByClassName("trade-traditional")[0]
        .classList.toggle("hidden");
    document.getElementsByClassName("trade-nlp")[0]
        .classList.toggle("hidden")
    document.getElementsByClassName("trade-type-item")[0]
        .classList.toggle("active")
    document.getElementsByClassName("trade-type-item")[1]
        .classList.toggle("active")
})