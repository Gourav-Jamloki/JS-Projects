let increase = document.querySelector('#inc');
let decrease = document.querySelector('#dec');
let digit = document.querySelector('#count');

let count = 0;

function decreaseCount(){
    count = count - 1 ; 
    digit.innerText = count;
    console.log('clicked');
}
function increaseCount(){
    count = count + 1 ; 
    digit.innerText = count;
    console.log('clicked');
}

increase.addEventListener('click',increaseCount);
decrease.addEventListener('click',decreaseCount);


// decrease.addEventListener('click',function(){
//     count = count - 1;
//     digit.innerText = count;
//     console.log('clicked');

// });
// increase.addEventListener('click',function(){
//     count = count + 1;
//     digit.innerText = count;
//     console.log('clicked');
// });


// decrease.addEventListener('click',function(){
//     count = count - 1;
//     digit.innerText = count;
//     console.log('clicked');

// });