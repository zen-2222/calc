const btns = document.querySelector(".buttons")
const text = document.querySelector('.text')

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
            let equation=text.value.split(/([+|-|÷|*|^|%])/)
            
            if(equation.includes('')){alert('ERROR')
                text.value=""
            }

            break
        }
        default:{ 
            text.value=text.value.concat(e.target.innerText)
            
            break
        }
        
    }

}

})