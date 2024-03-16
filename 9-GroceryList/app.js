let pencil = document.querySelector('#pencil');
let userInput = document.querySelector('#userInput');
let listItems = document.querySelector('.listItems');

pencil.addEventListener('click',function(){
    listItems.innerText = "";
});

userInput.addEventListener('keydown',function(event){
    if (event.key==="Enter") {
        addlistItem();
    }
});

function addlistItem(){
    let inpVal = userInput.value;
    let h2 = document.createElement("h2");

    h2.innerText = "- "+ inpVal;

    listItems.insertAdjacentElement('beforeend',h2);
    userInput.value = "";
}