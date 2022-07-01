const tradeTypeTabs = document.getElementsByClassName("time-group")[0];
tradeTypeTabs.addEventListener("click", (evt) => {
    // 取 target 的 data-value
    const selected = evt.target.dataset.value;
    const tabs = document.getElementsByClassName("time-item");
    for (let index = 0; index < tabs.length; index++) {
        // 为所有 tab 去除 active，发生事件的 tab 设为 active
        const tab = tabs[index];
        tab.classList.remove("active");
        if (index == selected) {
            tab.classList.add("active");
        }

    }
});