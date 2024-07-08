const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
let itemsPerPage = determineItemsPerPage();

function updateSliderPosition() {
    const slideWidth = sliderItems[0].offsetWidth; 
    const transformValue = -(currentIndex * slideWidth); 
    sliderTrack.style.transform = `translateX(${transformValue}px)`;
}

function determineItemsPerPage() {
    return window.innerWidth < 768 ? 1 : 2; 
}

function navigateSlider(direction) {
    if (direction === 'prev' && currentIndex > 0) {
        currentIndex -= itemsPerPage;
    } else if (direction === 'next' && currentIndex < sliderItems.length - itemsPerPage) {
        currentIndex += itemsPerPage;
    }
    updateSliderPosition();
}

prevButton.addEventListener('click', () => {
    navigateSlider('prev');
});

nextButton.addEventListener('click', () => {
    navigateSlider('next');
});

window.addEventListener('resize', () => {
    itemsPerPage = determineItemsPerPage();
    updateSliderPosition();
});

updateSliderPosition();
