let con = document.querySelector('.container'); 
let b1 = document.querySelector('.box1'); 
let b2 = document.querySelector('.box2'); 

con.addEventListener('click',function(){
    console.log("div is clicked");
});
b1.addEventListener('click',function(){
    console.log("b1 is clicked");
});
b2.addEventListener('click',function(){
    console.log("b2 is clicked");
});

//   SOLVE EVENT BUBBLING ISSUE USING STOP PROPOGATION()

// con.addEventListener('click',function(){
//     console.log("div is clicked");
// });
// b1.addEventListener('click',function(event){
//     event.stopPropagation();
//     console.log("b1 is clicked");
// });
// b2.addEventListener('click',function(event){
//     event.stopPropagation();
//     console.log("b2 is clicked");
// });
