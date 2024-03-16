let slides = document.querySelectorAll('.slide');
let prev = document.querySelector('.left');
let next = document.querySelector('.right');

const slideLenght = slides.length;
console.log(slideLenght);
let counter = 0;


slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)

next.addEventListener('click', function () {
    counter++;
    if (counter > slideLenght - 1) {
        counter = 0;
    }
    console.log(counter);
    slideImage();
});
prev.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = slideLenght -1 ;
    }
    console.log(counter);
    slideImage();
});


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}