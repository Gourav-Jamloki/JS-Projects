let flashcards = document.querySelector('.flashcards');
let createBox = document.querySelector('.create-box');
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');

let newCard = document.querySelector('#newCard');
let delCards = document.querySelector('#delCards');
let closeBtn = document.querySelector('#close');
let saveBtn = document.querySelector('#save');


let contentArray = [];

newCard.addEventListener('click',showCreateBox);
delCards.addEventListener('click',delFlashCards);
closeBtn.addEventListener('click',hideCreateBox);

function showCreateBox(){
    createBox.style.display = 'block';
}
function hideCreateBox(){
    createBox.style.display = 'none';
}
function delFlashCards(){
    flashcards.innerText = '';
    contentArray = [];
}

saveBtn.addEventListener('click',function(){
    console.log("addFlashcard");
    // console.log(question.value);
    const flashcard_info = {
        my_question : question.value,
        my_answer : answer.value
    };
    console.log("addFlashcard");
    contentArray.push(flashcard_info);
    divMaker(contentArray[contentArray.length-1]);
    question.value='';
    answer.value='';
}
);

function divMaker(text){
    let div = document.createElement('div');
    let h2_ques = document.createElement('h2');
    let h2_ans = document.createElement('h2');
    
    div.className = 'flashcard';
    
    h2_ques.innerText = text.my_question;
    
    h2_ans.setAttribute('style','text-align:center; display:none; color:red;');
    h2_ans.innerText = text.my_answer;
    
    div.appendChild(h2_ques);
    div.appendChild(h2_ans);

    div.addEventListener('dblclick',function(){
        if (h2_ans.style.display == "none") {
            h2_ans.style.display ="block";
        }
        else{
            h2_ans.style.display = "none";
        }
    });
    
    flashcards.appendChild(div);
}

// function addFlashcard(){
//     console.log("addFlashcard");
//     console.log(question.value);
//     const flashcard_info = {
//         my_question : question.value,
//         my_answer : answer.value
//     };
//     console.log("addFlashcard");
//     contentArray.push(flashcard_info);
//     divMaker(contentArray[contentArray.length-1]);
//     question.value='';
//     answer.value='';
// }




