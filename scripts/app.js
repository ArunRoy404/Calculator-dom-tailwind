let result = 0
let lastOp = ''
let op = ''
let value = 0

document.getElementById('button-container').addEventListener('click', (e) => {
    const btnText = e.target.innerText;
    if (btnText >= 0 && btnText <= 9) {
        addDisplayValue(btnText)
    }
    else if (btnText === '.' && getElement('dot').value === 'false') {
        addDisplayValue(btnText)
        getElement('dot').value = 'true'
    }
    else if (btnText === 'C') {
        clearDisplay()
    }
    else if (btnText === 'AC') {
        clearDisplay()
        result = 0
        lastOp = ''
        op = ''
        value = 0
    }
    else if (btnText === '=') {
        value = getDisplayValue()
        result = operation(result, value, lastOp)
        setDisplay(result)
        lastOp = ''
    }
    else {
        value = getDisplayValue()
        op =btnText
        if(lastOp === ''){
            result = value
        }else{
            result = operation(result, value, lastOp)
        }
        lastOp = op
        clearDisplay()
        console.log(result)
    }
})