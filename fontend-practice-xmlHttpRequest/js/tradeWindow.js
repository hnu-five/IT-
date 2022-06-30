export default function selectWindow (evt) {
    const windowChoose = document.querySelector('.fre-group')
    const activeChoose = windowChoose.querySelector('.fre-item.active') 
    if(activeChoose) {
        activeChoose.classList.remove('active')
    }

    const freChoose = evt.target //choosed one
    freChoose.classList.add('active') //class add active
    const freChooseText = freChoose.innerText
    return freChooseText
}