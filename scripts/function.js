const getElement = id => {
    return document.getElementById(id)
}
const display = () => {
    return document.getElementById('display')
}

const getDisplayValue = () =>{
    return display().innerText
}
const addDisplayValue = (digit) =>{
    if(display().innerText.length < 12 ){
        display().innerText = getDisplayValue() + digit
    }
}
const setDisplay= (result)=>{
    display().innerText = result
}
const clearDisplay= ()=>{
    display().innerText = '0'
    getElement('dot').value = 'false'
}

