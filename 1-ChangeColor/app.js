// console.log("jellei");
let but = document.querySelector('button');
let body = document.querySelector('body');

 function generateColor(){
    let a = Math.floor(Math.random()*266);
    let b = Math.floor(Math.random()*266);
    let c = Math.floor(Math.random()*266);

    let result = `RGB(${a},${b},${c})`
    return result ;
}

but.addEventListener('click',function(){
    let randomColor = generateColor();
    body.style.backgroundColor = randomColor;
    console.log("clicked");
})