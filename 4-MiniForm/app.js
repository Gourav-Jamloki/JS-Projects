let subBtn = document.querySelector('#submit');
let mssgInp = document.querySelector('#message-input');
let mssgOut = document.querySelector('#get-message');

subBtn.addEventListener('click',function(event){
    let inpValue = mssgInp.value;
    console.log(inpValue);
    mssgOut.innerText = inpValue;
    
});