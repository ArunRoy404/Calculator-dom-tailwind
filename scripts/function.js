const getElement = id => {
    return document.getElementById(id)
}
const display = () => {
    return document.getElementById('display')
}

const getDisplayValue = () =>{
    const displayValue = display().innerText
    if(displayValue == ''){
        console.log(2)
        return 0
    }
    return parseFloat(displayValue)
}
const addDisplayValue = (digit) =>{
    if(display().innerText.length < 11 ){
        display().innerText = display().innerText + digit
    }
}
const setDisplay= (result)=>{
    display().innerText = result
}
const clearDisplay= ()=>{
    display().innerText = ''
    getElement('dot').value = 'false'
}

const operation = (value1, value2, op) =>{
    switch(op){
        case '+':
            value1 += value2
            break
        case '-':
            value1 -= value2
            break
        case '*':
            value1 *= value2
            break
        case '/':
            value1 /= value2
            break
    }
    return value1
}
