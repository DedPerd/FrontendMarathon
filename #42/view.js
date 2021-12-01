//Добавить hover эффект только для устройств без сенсорного экрана
function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
if(!isTouchDevice()) {
    for(let prop of document.querySelectorAll('.keyboard__button')) {
        prop.classList.add('keyboard__button-hover');
    }
}
//------------------------------------------------------------------
let View = {
    displayedValue: '0',
    updateView() {
        document.querySelector('.calculator__display').children[0].innerText = this.displayedValue; 
    },
    buttonAnimation(button) { 
        button.classList.add('keyboard__button_active');
        setTimeout(() => {button.classList.remove('keyboard__button_active')}, 100);
    },
};
export default View;