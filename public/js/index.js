const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const backSlide = document.querySelector(".btn-prev");


 const forwardSlide = function(currentslide){
   slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${(indx-currentslide) * 100}%)`;
      // console.log(slide)
    });
 }
var currentslide = 0
nextSlide.addEventListener("click" , function(){
   if(currentslide===slides.length-1){
      currentslide=0
      forwardSlide(currentslide)
   }else{
      currentslide++;
      forwardSlide(currentslide)
   }
});
var maxSlide = slides.length - 1
backSlide.addEventListener('click' , function(){
   if(currentslide===0){
      currentslide=maxSlide
      forwardSlide(currentslide)
   }
  else{
      currentslide--;
      forwardSlide(currentslide)
   }
})
forwardSlide(currentslide)
// loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });
// console.log(slides.length)
// screen width responsiveness

const navitems  = document.getElementsByClassName('nav_list')
function responsiveControl(){
var x = window.matchMedia("(max-width: 1000px)")
if (x ? navitems.style.display = 'none' : navitems.style.display = 'flex');
}
document.addEventListener('DOMContentLoaded' , responsiveControl())
