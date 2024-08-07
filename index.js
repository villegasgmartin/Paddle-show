


/*mostrar preguntas al comenzar*/
const btnComenzar = document.querySelector('.btnComenzar');
btnComenzar.addEventListener('click', ()=>{
    const intro = document.querySelector('.intro');
    const form = document.querySelector('.container');
    intro.style.display = 'none';
    form.style.display = 'flex';
})




document.addEventListener('DOMContentLoaded', function() {
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const progressCircles = document.querySelectorAll('.progress-circle');
    const progresslines = document.querySelectorAll('.progress-line');
    let currentSlide = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeSlide(1);
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeSlide(-1);
        });
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = 0;
        } else if (currentSlide >= slides.length) {
            currentSlide = slides.length - 1;
        }

        slides[currentSlide].classList.add('active');

        updateProgress(currentSlide);
    }

    function updateProgress(step) {
        progressCircles.forEach((circle, index) => {
            if (index <= step) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        })
        progresslines.forEach((line, index) => {
            if (index <= step) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        }
    );
    }

    // Mostrar popup si existe
    const popup = document.getElementById('no-results-popup');
    if (popup) {
        popup.style.display = 'block';
        document.querySelector('.close-btn').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }
});




