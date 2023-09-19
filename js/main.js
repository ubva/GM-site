let btn = document.querySelector(".header-btn")
let list = document.querySelector(".header-box")

 btn.addEventListener('click', ()=>{
    list.classList.toggle('active')
 })

 //hero
 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("hero__active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " hero__active";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}