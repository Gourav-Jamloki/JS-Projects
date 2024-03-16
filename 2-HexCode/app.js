let but1 = document.querySelector('button');
let body = document.querySelector('body');
let code = document.querySelector('#hex-code');

let hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];  

    let hex ;
    function randomColor(){

        for(let i = 0;i<6;i++)
        {
            let randomIndex = Math.floor(Math.random()*hexColor.length);
            hex = hex + hexColor[randomIndex];
        }
        // return hex;
    }

but1.addEventListener('click', function(){
    hex = '';
    randomColor();
    // let result = hex;
    body.style.backgroundColor = "#" + hex;
    console.log(hex);
    code.innerText = hex;

});