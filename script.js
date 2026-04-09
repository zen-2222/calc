const btns = document.querySelector(".buttons")
const text = document.querySelector('.text')

function compute(equation){
//multiplication, power , divison & mod loop
let i
for(i=0;i<equation.length;i++){
    let first=parseFloat(equation[i-1]),second=parseFloat(equation[i+1])
    switch(equation[i]){
        case '%':{
            let result=first % second
            equation.splice(i-1,3,result)
            i--
            break;
        }
        case '*':{
            let result=first * second
            equation.splice(i-1,3,result)
            i--
            break;
        }
        case '^':{
            let result=first ** second
            equation.splice(i-1,3,result)
            i--
            break;
        }
        case '÷':{
            let result=first / second
            equation.splice(i-1,3,result)
            i--
            break;
        }}
}
//add & sub loop
for(i=0;i<equation.length;i++){
    let first=parseFloat(equation[i-1]),second=parseFloat(equation[i+1])
    switch(equation[i]){
        case '−':{
            let result=first - second
            equation.splice(i-1,3,result)
            i--
            
            break;
        }
        case '+':{
            let result=first + second
            equation.splice(i-1,3,result)
            i--
            break;
        }
    }
}
return equation

}


btns.addEventListener('click',(e)=>{ 
if(e.target.classList.value == "btn"){
    e.preventDefault()
    let operation= e.target.innerText
    switch(operation){
        case 'C':{text.value=''
            break
        }
        case `←`:{text.value=text.value.slice(0,-1)
            break
        }
        case '=':{
            let equation=text.value.split(/([+|−|÷|*|^|%])/)
            if(equation[0] == "" && (equation[1]=='+' || equation[1]=='−')) equation[0]='0'

            if(equation.includes('')){alert('ERROR')
                text.value=""
            return
            }
            text.value=compute(equation)
            
            break
        }
        default:{ 
            text.value=text.value.concat(e.target.innerText)
            
            break
        }
        
    }

}

})