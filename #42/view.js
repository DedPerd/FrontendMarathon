//Добавить hover эффект только для устройств без сенсорного экрана
//Я скопипастил это с интернета
function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
if(!isTouchDevice()) {
    for(let prop of document.querySelectorAll('.keyboard__button')) {
        prop.classList.add('keyboard__button-hover');
    }
}
//------------------------------------------------------------------
export let View = {
    displayedValue: '0',
    displayWidth: document.querySelector('.calculator__display').clientWidth,
    paragraph: document.querySelector('.calculator__display>p'),
    updateView() {
        document.querySelector('.calculator__display').children[0].innerText = this.displayedValue; 
        this.paragraph.style.fontSize = '96px';
        this.adjustFontSize();
    },
    buttonAnimation(button) { 
        button.classList.add('keyboard__button_active');
        setTimeout(() => {button.classList.remove('keyboard__button_active')}, 100);
    },
    adjustFontSize() {
        const fontSize = parseInt(this.paragraph.style.fontSize);
        if(this.paragraph.offsetWidth >= this.displayWidth && fontSize >= 54) {
            this.paragraph.style.fontSize = `${fontSize - 1}px`;
            this.adjustFontSize();
        }
    }
};