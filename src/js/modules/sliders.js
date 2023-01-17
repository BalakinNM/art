const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);
    function showSlides(n) {
        if (n < 1) {
            slideIndex = items.length;
        } 
        if (n > items.length){
            slideIndex = 1;
        }
        items.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated');
        });
        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    try {
        const nextBtn = document.querySelector(next),
              prevBtn = document.querySelector(prev);
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('fadeInLeft');
                items[slideIndex - 1].classList.add('fadeInRight');
            });
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.add('fadeInLeft');
                items[slideIndex - 1].classList.remove('fadeInRight');
            });
    } catch (e) {}
    function activateAnimation() {
        if (dir === "vertical") {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('fadeInDown');
            }, 5000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('fadeInLeft');
            }, 5000);
        }
    }
    activateAnimation();
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};
export default sliders;