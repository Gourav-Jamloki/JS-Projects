let url = "https://dog.ceo/api/breeds/image/random";
// https://dog.ceo/api/breeds/image/random

let btn = document.querySelector('button');

btn.addEventListener('click',async function(){
    let image = await getImage();
    console.log(image);  
    let img = document.querySelector('#img');
    img.setAttribute("src",image);
    
});

async function getImage(){
    try{
        console.log('clcik');  
        let res = await axios.get(url);
        // let result = await res.json();
        return res.data.message;

        // let res2 = await axios.get(url);
        // // let result2 = await res2.json();
        // console.log(res2.data.fact);
    }
    catch (error){
        console.log(error);
        return "ERROR";
    }
}

// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector('button');

// btn.addEventListener('click',async function(){
//     let fact = await getFacts();
//     console.log(fact);  
//     let p = document.querySelector('#fact');
//     p.innerText = fact;
    
// });

// async function getFacts(){
//     try{
//         console.log('clcik');  
//         let res = await axios.get(url);
//         // let result = await res.json();
//         return res.data.fact;

//         // let res2 = await axios.get(url);
//         // // let result2 = await res2.json();
//         // console.log(res2.data.fact);
//     }
//     catch (error){
//         console.log(error);
//         return "ERROR";
//     }
// }
// API CALL USING PROMISES AND ITS METHODS

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((result)=>{
//     console.log(result.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((result)=>{
//     console.log(result.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })