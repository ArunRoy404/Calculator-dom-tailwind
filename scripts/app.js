let result = 0
let op = ''

document.getElementById('button-container').addEventListener('click',(e)=>{
    const btnText = e.target.innerText;
    if(btnText == 'C'){
        clearDisplay()
        op = ''
    }
    else if(btnText >=0 && btnText<=9){
        addDisplayValue(btnText)
    }
    else if(btnText == '.' && getElement('dot').value == 'false'){
        addDisplayValue(btnText)
        getElement('dot').value = 'true'
    }
    else if(btnText == '='){
        let value = parseFloat(getDisplayValue())
        switch(op){
            case '+':
                result += value
                break
            case '-':
                result -= value
                break
            case '*':
                result *= value
                break
            case '/':
                result /= value 
                break
        }
        console.log(result, value, op)
        setDisplay(result)
    }
    else{
        result = parseFloat(getDisplayValue())
        op = btnText
        clearDisplay()
    }
})