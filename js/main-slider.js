let sliderButtons = document.querySelectorAll('.slider__change-button');
let slides = document.querySelectorAll('.main-slider__item');

// console.log(sliderButtons.length) ;

// console.log(slides.length);

let  addSliderButtonEvent = function(sliderButton, slider) {
  sliderButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (!sliderButton.classList.contains('current')) {
        for (let i=0; i < sliderButtons.length; i++){
          sliderButtons[i].classList.remove('current');
          slides[i].classList.remove('current');
        }
      sliderButton.classList.add('current');
      slider.classList.add('current');
    }
  });
};

for (let i=0; i < sliderButtons.length; i++) {
  addSliderButtonEvent(sliderButtons[i], slides[i]);
}


