let btn1 = document.querySelector('button');
let q = document.querySelector('p');
let a = document.querySelector('#author');

let quotes = {
    "― Jules Renard":  '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
    "― Albert Einstein": '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
    "― Deepak Chopra": '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”'

}


const authors = Object.keys(quotes);

function generateQuotes(){
    let author = authors[Math.floor(Math.random()*authors.length)];
    let quote = quotes[author];
    q.innerText = quote;
    a.innerText = author;
    console.log('click');
}


btn1.addEventListener('click',generateQuotes);

// const authors = Object.keys(quotes);


// btn1.addEventListener('click',function(){
//     let author = authors[Math.floor(Math.random()*authors.length)];
//     let quote = quotes[author];
//     q.innerText = quote;
//     a.innerText = author;
//     console.log('click');
// });