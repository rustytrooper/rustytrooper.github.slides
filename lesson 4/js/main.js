const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index=0;

const activeSlide = n => {
    for (const slide of slides) {
          slide.classList.remove('active');
    } 
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (const dot of dots) {
          dot.classList.remove('active');
    } 
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () =>{
    if(index==slides.length-1){
    index=0;
    prepareCurrentSlide(index);
    }else {
        index++;
    prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index==0) {
        index=slides.length-1;
        prepareCurrentSlide(index);
        }else {
            index--;
        prepareCurrentSlide(index);
        }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let slideIndex = 1;
showSlides(slideIndex);


next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();
});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";    
  }
 let timer = 0;
 makeTimer(); 
 function makeTimer(){
    clearInterval(timer) 
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },2000);
  }
  
 