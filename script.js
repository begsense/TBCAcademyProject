const coursesArray = [
  {img: 'images/courses-1.jpeg', title: 'iOS Development', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-2.jpeg', title: 'React', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-3.jpeg', title: 'Intro to Phyton', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-4.jpeg', title: 'Advanced Phyton', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-5.jpeg', title: 'Advanced Cybersecurity Course', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-6.jpeg', title: 'ToT - Training of Trainers', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-7.jpeg', title: 'Blockchain', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-8.jpeg', title: 'DevOps', text: 'რეგისტრაცია დასრულებულია' },
  {img: 'images/courses-9.jpeg', title: 'Information Security Governance', text: 'რეგისტრაცია დასრულებულია' },
];

const container = document.querySelector('.courses');

let out = '';
for (let i = 0; i < coursesArray.length; i++) {
  const item = coursesArray[i];

  out += `
    <div class="courses-item">
      <img class="courses-item__img" src="${item.img}" />
      <div class="courses-item__body">
        <div>
          <span class="courses-item__body__text">${item.title}</span>
          <span class="courses-item__body__text courses-item__body__status">${item.text}</span>
        </div>

        <div style="text-align: start">
          <button class="app-button courses-item__body__button">
            <img src="images/arrow.svg" />
            <span>კურსის დეტალები</span>

          </button>
        </div>

      </div>
    </div>
  `;
}

container.innerHTML = out;

// SLIDER

const slider = document.querySelector('.slider');
const sliderArrows = document.querySelectorAll('.slider-arrow');
const sliderItems = document.querySelectorAll('.slider-content__item');

let sliderIndex = 0;

for(let i = 0; i < sliderArrows.length; i++) {
  sliderArrows[i].onclick = function() {
  
    if(i == 0) {
      if(sliderIndex - 1 < 0) {
        sliderIndex = sliderItems.length - 1;
      } else {
        sliderIndex--;
      }
      changeSlider(sliderIndex);
    }

    if(i == 1) {
        if (sliderIndex + 1 > sliderItems.length - 1){
          sliderIndex = 0;
        } else {
          sliderIndex++;
        }
      console.log('slider', sliderIndex);
      changeSlider(sliderIndex);
    }
  }
}

function changeSlider(sliderIndex) {
  sliderItems.forEach(item => item.classList.remove('slider-content__item--active'));
  sliderItems[sliderIndex].classList.add('slider-content__item--active');
  sliderDots.forEach(item => item.classList.remove('slider-dot--active'));
  sliderDots[sliderIndex].classList.add('slider-dot--active');
}

const sliderDots = document.querySelectorAll('.slider-dot');

for(let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = function() {
    changeSlider(i);
  }
}

setInterval(function() {
  if (sliderIndex + 1 > sliderItems.length - 1 ){
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  changeSlider(sliderIndex);
}, 5000);

//const faqHiddenText = document.querySelectorAll('.faq__body__item__hiddentext');
// faqHiddenText.classList.add('display:flex');
const faqItemArr = document.querySelectorAll('.faq__body__item');

for(let i = 0; i < faqItemArr.length; i++) {
  
  faqItemArr[i].onclick = function() {
    if(faqItemArr[i].classList.contains('faq__body__item--active')) {
      faqItemArr[i].classList.remove('faq__body__item--active');
      return;
    }
    // if (faqHiddenText[i].classList.contains('faq__body__item__hiddentext--active') ){
    //   faqHiddenText[i].classList.remove('faq__body__item__hiddentext--active');
    // } else {
    //   faqHiddenText[i].classList.add('faq__body__item__hiddentext--active');
    // }
    
    // faqHiddenText[i].classList.toggle('faq__body__item__hiddentext--active');

    for(let x = 0; x < faqItemArr.length; x++) {
      faqItemArr[x].classList.remove('faq__body__item--active');
    }

    faqItemArr[i].classList.add('faq__body__item--active');
  } 
}
