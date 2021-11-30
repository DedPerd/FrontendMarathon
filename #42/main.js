'use strict'
function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
if(!isTouchDevice()) {
    for(let prop of document.querySelectorAll('.keyboard__button')) {
        prop.classList.add('keyboard__button-hover');
        console.log(prop)
    }
}
let calculator = {
    displayedValue: '0',
    firstValue: undefined,
    secondValue: undefined,
    changingValue: 'firstValue',
    operator: undefined,
    updateView() {
        document.querySelector('.calculator__display').children[0].innerText = this.displayedValue; 
    },
    buttonAnimation(button) { 
        button.classList.add('keyboard__button_active');
        setTimeout(() => {button.classList.remove('keyboard__button_active')}, 100);
    },
    clickHandler(event) {
        let button = this.getButton(event);
        if(button.button !== null) {
            //анимация------------------------
            this.buttonAnimation(button.button);
            //--------------------------------

            if(button.type === 'number') {
                if(this.operator !== undefined && this.secondValue === undefined) {
                    this.changingValue = 'secondValue';
                    this.displayedValue = '0';
                }
                if(this.displayedValue === '0') {
                    this.displayedValue = '';
                }
                this.displayedValue += String(button.value);
                if(this.changingValue === 'firstValue') {
                    this.firstValue = this.displayedValue;
                } else if( this.changingValue === 'secondValue') {
                    this.secondValue = this.displayedValue;
                }
                
                this.updateView();
            } else if(button.type === 'operator') {
                if(button.value === 'equal') {
                    if(this.operator === undefined || this.firstValue === undefined || this.secondValue === undefined) {
                        this.operator = undefined;
                        this.secondValue = undefined;
                        this.firstValue = this.displayedValue;
                        this.changingValue = 'firstValue';
                    } else {
                        this.displayedValue = String(this.calc(this.operator, this.firstValue, this.secondValue));
                        this.updateView();
                        this.firstValue = this.displayedValue;
                        this.secondValue = undefined;
                        this.changingValue = 'firstValue';
                    }
                } else {
                    this.operator = button.value;
                    if(this.changingValue === 'secondValue') {
                        this.displayedValue = String(this.calc(this.operator, this.firstValue, this.secondValue));
                        this.updateView();
                        this.firstValue = this.displayedValue;
                        this.secondValue = undefined;
                        this.changingValue = 'firstValue'; 
                    }
                }
            } else if(button.type === 'clear-all-input') {
                this.displayedValue = '0';
                this.firstValue = undefined;
                this.secondValue = undefined;
                this.operator = undefined;
                this.changingValue = 'firstValue';
                this.updateView();
            } else if(button.type === 'clear-the-most-resent-entry') {
                this.operator = undefined;
                this.displayedValue = this.displayedValue.slice(0, -1);
                if(this.displayedValue === '' || this.displayedValue === '-') {
                    this.displayedValue = '0';
                }

                if(this.changingValue === 'firstValue') {
                    this.firstValue = this.displayedValue;
                    console.log('ферст валуе')
                } else if( this.changingValue === 'secondValue') {
                    this.secondValue = this.displayedValue;
                    console.log('cеконд валуе')
                }
                this.updateView()
            }
            // if(this.operator === undefined) {
            //     this.firstValue = this.displayedValue;
            // }
            console.log(this);
        }    
    },
    getButton(event) {
        let button = {
            button: null,
            type: undefined,
            value: undefined,
        };
        button.button = (event.target.classList.contains('keyboard__button')) ? event.target : 
        (event.target.parentElement.classList.contains('keyboard__button')) ? event.target.parentElement : 
        null;
        if(button.button !== null) {
            if(button.button.id.includes('number')) {
                button.type = 'number';
                button.value = button.button.id.slice(-1);
            } else if(button.button.id.includes('clear')) {
                button.type = button.button.id;
            } else {
                button.type = 'operator';
                button.value = {
                    plus: 'sum', 
                    minus: 'diff', 
                    'multiplication-sign': 'multi', 
                    'division-sign': 'div', 
                    'equal': 'equal'
                }[button.button.id];
            }
        }
        return button;
    },
    calc(operator, a, b) {
        let operations = {
            sum: Number(a) + Number(b),
            diff: a - b,
            multi: a * b,
            div: a / b, 
        };
        let result = operations[operator];
        return isFinite(result) ? result : 'Error';
    },
};
calculator.updateView();
document.querySelector('.keyboard').addEventListener('click', (event) => {calculator.clickHandler(event)});
   
window.calculator = calculator;