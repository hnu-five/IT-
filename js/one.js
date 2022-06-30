const firsitchoose = document.getElementsByClassName("trade-type")[0];
firsitchoose.addEventListener(
    'click',
    (event) => {
        const type = event.target.dataset.value;
        if (type === "trad") {
            document
                .getElementsByClassName("trade-seciton")[0]
                .classList.remove("init-hidden");
            document
                .getElementsByClassName("nlp-section")[0]
                .classList.add("init-hidden");
            document.getElementsByClassName("trade-type-item")[0].classList.add("active");
            document.getElementsByClassName("trade-type-item")[1].classList.remove("active");
        } else {
            document
                .getElementsByClassName("trade-seciton")[0]
                .classList.add("init-hidden");
            document
                .getElementsByClassName("nlp-section")[0]
                .classList.remove("init-hidden");
            document.getElementsByClassName("trade-type-item")[1].classList.add("active");
            document.getElementsByClassName("trade-type-item")[0].classList.remove("active");
        }
    },
    false
);