let display = document.querySelector('.display');

function clicking(e){
    display.append(e.innerText);
    console.log(e)
}

window.addEventListener('keypress',(e)=>{
    
    key=e.key;
    code=e.code;
    if(code.includes('Digit')||code.includes('Numpad')){
        display = document.querySelector('.display');
        display.innerText = display.innerText+key
        console.log(e)  
    }else{
        console.log('error')
    }
});

function eval2 (){
    display = document.querySelector('.display');
    output = display.innerText;
    final = eval(output);
    display.innerText='';
    display.append(final);
   
}

function clear2(e){
    display.innerText= '';
    console.log(e)
}