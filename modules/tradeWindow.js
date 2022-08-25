export default function selectWindow(evt){
    const freGroup = evt.currentTarget
    const activeE1 = freGroup.querySelector('.fre-item.active')
    if(activeE1){
        activeE1.classList.remove('active')
    }
    const freE1 = evt.target
    freE1.classList.add('active')
    return freE1.dataset.value
}