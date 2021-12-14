import { View } from './view.js';

let Calculator = {
    view: View,
    firstValue: undefined,
    secondValue: undefined,
    changingValue: 'firstValue', 
    operator: undefined, 
    clickHandler(event) {
        let button = this.getButton(event);
        if(button.button !== null) {
            //анимация------------------------
            this.view.buttonAnimation(button.button);
            //--------------------------------

            if(button.type === 'number') {
                if(this.operator !== undefined && this.secondValue === undefined) {
                    this.changingValue = 'secondValue';
                    this.view.displayedValue = '0';
                }
                if(this.view.displayedValue === '0') {
                    this.view.displayedValue = '';
                }
                this.view.displayedValue += String(button.value);
                if(this.changingValue === 'firstValue') {
                    this.firstValue = this.view.displayedValue;
                } else if( this.changingValue === 'secondValue') {
                    this.secondValue = this.view.displayedValue;
                }
                
            } else if(button.type === 'operator') {
                if(button.value === 'equal') {
                    if(this.operator === undefined || this.firstValue === undefined || this.secondValue === undefined) {
                        this.operator = undefined;
                        this.secondValue = undefined;
                        this.firstValue = this.view.displayedValue;
                        this.changingValue = 'firstValue';
                    } else {
                        this.view.displayedValue = String(this.calc(this.operator, this.firstValue, this.secondValue));
                        this.firstValue = this.view.displayedValue;
                        this.secondValue = undefined;
                        this.changingValue = 'firstValue';
                    }
                } else {
                    this.operator = button.value;
                    if(this.changingValue === 'secondValue') {
                        this.view.displayedValue = String(this.calc(this.operator, this.firstValue, this.secondValue));
                        this.firstValue = this.view.displayedValue;
                        this.secondValue = undefined;
                        this.changingValue = 'firstValue'; 
                    }
                }
            } else if(button.type === 'clear-all-input') {
                this.view.displayedValue = '0';
                this.firstValue = undefined;
                this.secondValue = undefined;
                this.operator = undefined;
                this.changingValue = 'firstValue';
            } else if(button.type === 'clear-the-most-resent-entry') {
                this.operator = undefined;
                this.view.displayedValue = this.view.displayedValue.slice(0, -1);
                if(this.view.displayedValue === '' || this.view.displayedValue === '-') {
                    this.view.displayedValue = '0';
                }
                if(this.changingValue === 'firstValue') {
                    this.firstValue = this.view.displayedValue;
                } else if( this.changingValue === 'secondValue') {
                    this.secondValue = this.view.displayedValue;
                }
            }   
            this.view.updateView();
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
Calculator.view.updateView();
document.querySelector('.keyboard').addEventListener('click', (event) => {Calculator.clickHandler(event)});
