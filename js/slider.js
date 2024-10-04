
const prevSlide = document.querySelector(".prev__slide");
const nextSlide = document.querySelector(".next__slide");
const photoSlide = document.querySelector(".img_slide");
const prevSlideRev = document.querySelector(".reviews__slider_prev");
const nextSlideRev = document.querySelector(".reviews__slider_next");
const reviwSlider = document.querySelector(".reviews__slider_img");
const imgElement = document.querySelector('.img_slide_photo')





let a = 1;
let b = 1;


handlePrevsl();
prevSlide.addEventListener("click", handlePrevsl);

function handlePrevsl() {
    a--;
    if (a < 1) {
        a = 11;
    }

    photoSlide.innerHTML = "";
    const mewImg = document.createElement("img");
    mewImg.classList.add("img_slide_photo");
    mewImg.src = `assets/item${a}.jpg`;
    mewImg.alt = `item${a}`;
    photoSlide.append(mewImg);
}
nextSlide.addEventListener("click", handleNextsl);
function handleNextsl() {
    a++;
    if (a > 11) {
        a = 1;
    }

    photoSlide.innerHTML = "";
    const mewImg = document.createElement("img");
    mewImg.classList.add("img_slide_photo" );
    mewImg.src = `assets/item${a}.jpg`;
    mewImg.alt = `item${a}`;
    photoSlide.append(mewImg);
}
handlNextrev();
nextSlideRev.addEventListener("click", handlNextrev);

function handlNextrev() {
    b++;
    if (b > 7) {
        b = 0;
    }
    reviwSlider.innerHTML = "";
    const mewImg = document.createElement("img");
    mewImg.classList.add("img_slide_photo", 'h-[480px]');
    mewImg.src = `assets/item${b}.jpg`;
    mewImg.alt = `item${b}`;
    reviwSlider.append(mewImg);
}
prevSlideRev.addEventListener("click", handlPrevrev);

function handlPrevrev() {
    b--;
    if (b < 0) {
        b = 7;
    }
    reviwSlider.innerHTML = "";
    const mewImg = document.createElement("img");
    mewImg.classList.add("img_slide_photo", 'h-[480px]');
    mewImg.src = `assets/item${b}.jpg`;
    mewImg.alt = `item${a}`;
    reviwSlider.append(mewImg);
}


