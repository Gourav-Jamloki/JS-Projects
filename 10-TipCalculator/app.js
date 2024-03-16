let amount = document.querySelector('#amount');
let guest = document.querySelector('#guest');
let quality = document.querySelector('#quality');
let calculate = document.querySelector('#calculate');
let tipAmount = document.querySelector('#tip-amount');

let p1 = document.createElement('p');

calculate.addEventListener('click',function(){
    calculateTip();
    console.log('working1');
});

function calculateTip(){
    const tip = ((amount.value * guest.value)/(quality.value)).toFixed(2);
    amount.value="";
    guest.value="";
    quality.value="";
    // let node = document.createTextNode(`Tip ${tip} each`);
    // p1.appendChild(node);
    p1.innerText = "Tip $ " + tip + " each";
    tipAmount.insertAdjacentElement('beforeend',p1);
    tipAmount.classList.add("show");
    console.log(tip);
    showTipAmount();
    // p1.innerText = "";
}
function showTipAmount(){
    // tipAmount.classList.add('show');
    console.log('working2');
    setTimeout(function(){
        tipAmount.classList.remove("show");
    },3000);
};