let userInput = document.querySelector('#userInput');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('#equal');

let buttonsArray = Array.from(buttons);

let str = '';

buttonsArray.forEach(function(btn){
    btn.addEventListener('click',function(event){
        console.log(event.target.innerText);
        if (event.target.innerText == 'C') {
            str = '';
            userInput.value = str;
        }
        // else if(event.target.innerText == '='){
        //     str = eval(str);
        //     userInput.value = str;
        // }
        else{
            str += event.target.innerText;
            userInput.value = str;
        }
    });
});
equal.addEventListener('click',function(event){
    if (event.target.innerText == '=') {
        str = eval(str);
        userInput.value = str;
    }
});
// console.log(buttonsArray);