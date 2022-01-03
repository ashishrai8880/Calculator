
let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = "";

button.forEach((e)=>{
    e.addEventListener('click', ()=>{

        let buttonText = e.innerText;
        
        if(buttonText == 'X'){
            buttonText = '*';
            screen.value += buttonText;
        }
        else if(buttonText == 'C'){
            screen.value = " ";
        }
        else if(buttonText == '='){
            try{  
                screen.value = eval(screen.value);
            }catch{
                screen.value = "Invalid Format";
            }
        }
        else{
            screen.value += buttonText ;
        }
    })
})