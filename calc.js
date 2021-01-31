const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.op');

const preResult = document.querySelector('.preResult');
const result = document.querySelector('.displayResult');

let n1;
let n2;
let op1;
let total;

numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        n = e.target.value;
        result.value += n;
        
        n2 = Number(result.value);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', op => {
        op = op.target.value;
        const ops = op !== '=' && op !== 'AC' && op !== 'DEL' && op !== '.';

        if(preResult.value === '' && ops){ 
            preResult.value = result.value;
            result.value = null;

            n1 = Number(preResult.value);
            op1 = op;
        } else if (result.value !== '' && preResult.value !== '' && ops){
            n1 = Number(preResult.value);
            n2 = Number(result.value);
            total = calcTotal(n1, n2, op);

            preResult.value = isInt(total);
            result.value = null;
        }
        if (op === '='){
            n1 = Number(preResult.value);
            n2 = Number(result.value);
            total = calcTotal(n1, n2, op1);

            result.value = isInt(total);
            preResult.value = null;

            n1 = null;
            n2 = total;
        }
        if (op === 'AC') {
            n1 = null;
            n2 = null;
            preResult.value = null;
            result.value = null;
        }
        if (op === 'DEL'){
            if(result.value !== ''){
                let str = n2.toString();
                str = str.slice(0, -1);
                
                n2 = Number(str);
                result.value = n2;
            } else return;
        }
        if (op === '.'){
            if (result.value.includes('.')) return
            else {
                result.value += '.';
            }
        }
    });
});

function calcTotal(n1, n2, op){
    switch(op){
        case op = '+':
            return n1 + n2;
            break;
        
        case op = '-':
            return n1 - n2;
            break;

        case op = '÷':
            return n1 / n2;
            break;

        case op = '*':
            return n1 * n2;
            break;

        default:
            return;
    }
}

function isInt(n) {
    if (n % 1 === 0) return n;
    else {
        return n.toFixed(2);
    }
}