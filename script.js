const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides= document.querySelectorAll('.slide');
const noofslides=slides.length;
let currslide=0;

nextBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    currslide++;
    if(currslide > (noofslides-1)){
        currslide = 0;
    }
    slides[currslide].classList.add('active');
}

prevBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    currslide--;
    if(currslide < 0){
        currslide = noofslides-1;
    }
    slides[currslide].classList.add('active');
}