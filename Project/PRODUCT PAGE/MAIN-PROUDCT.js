document.addEventListener("DOMContentLoaded", function() {
    var carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(function(container) {
        var carousel = container.querySelector('.product-carousel');
        var prevButton = container.querySelector('.carousel-prev');
        var nextButton = container.querySelector('.carousel-next');

        var currentSlide = 0;
        var totalSlides = carousel.querySelectorAll('.product-item').length;

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
            Array.prototype.forEach.call(slides, function(slide) {
                slide.style.display = 'none';
            });
        
            slides[slideIndex].style.display = 'block';
        
            carousel.style.height = slides[slideIndex].offsetHeight + 'px';
        }
    });
});
