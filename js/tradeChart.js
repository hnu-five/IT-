const tradeTypeTabs = document.getElementsByClassName("time-group")[0];
tradeTypeTabs.addEventListener("click", (evt) => {
    // 取 target 的 data-value
    const selected = evt.target.dataset.value;
    const tabs = document.getElementsByClassName("time-item");
    for (let index = 0; index < tabs.length; index++) {
        const tab = tabs[index];
        tab.classList.remove("active");
        if (index == selected) {
            tab.classList.add("active");
        }

    }
});