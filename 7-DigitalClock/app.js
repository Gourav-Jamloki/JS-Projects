let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
// let mili = document.querySelector('#mili');

setInterval(function(){
    const currentTime = new Date();
    
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = (currentTime.getSeconds())<10?"0"+currentTime.getSeconds():""+currentTime.getSeconds();
    // let miliSeconds = currentTime.getMilliseconds();
    
    hrs.innerText = hours;
    min.innerText = minutes;
    sec.innerText = seconds;
    // mili.innerText = miliSeconds;

},1000)



// console.log(hours);
console.log(minutes);
console.log(seconds);
// console.log(miliSeconds);