document.addEventListener("DOMContentLoaded", function() {
    var carouselContainers = document.getElementsByClassName('carousel-container');

    Array.from(carouselContainers).forEach(function(container) {
        var carousel = container.getElementsByClassName('product-carousel')[0];
        var prevButton = container.getElementsByClassName('carousel-prev')[0];
        var nextButton = container.getElementsByClassName('carousel-next')[0];

        var currentSlide = 0;
        var slides = carousel.getElementsByClassName('product-item');
        var totalSlides = slides.length;

        showSlide(currentSlide);

        prevButton.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        nextButton.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        function showSlide(slideIndex) {
            Array.from(slides).forEach(function(slide) {
                slide.style.display = 'none';
            });

            slides[slideIndex].style.display = 'block';
        }
    });
});
