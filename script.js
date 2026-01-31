const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;

function updateSlider(){
  slides.style.transform = `translateX(${-counter*100}%)`;
}

next.addEventListener('click',()=>{
  counter++;
  if(counter>=images.length) counter=images.length-1; // آخر صورة
  updateSlider();
});

prev.addEventListener('click',()=>{
  counter--;
  if(counter<0) counter=0; // أول صورة
  updateSlider();
});
