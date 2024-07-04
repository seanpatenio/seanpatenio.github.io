document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("popupModal");
    var closeModalButton = document.getElementById("closeModal");

    modal.style.display = "flex";

    closeModalButton.onclick = function() {
        modal.style.display = "none";
    }

    var links = document.getElementsByClassName('header-links')[0];
    var menuIcon = document.getElementsByClassName('menu-icon')[0];

    menuIcon.addEventListener('click', function() {
        links.classList.toggle('show');
    });

    var carouselContainers = document.getElementsByClassName('carousel-container');

    Array.prototype.forEach.call(carouselContainers, function(container) {
        var carousel = container.getElementsByClassName('product-carousel')[0];
        var prevButton = container.getElementsByClassName('carousel-prev')[0];
        var nextButton = container.getElementsByClassName('carousel-next')[0];

        var currentSlide = 0;
        var slides = carousel.getElementsByClassName('product-item');
        var totalSlides = slides.length;

        setCarouselHeight(carousel, slides);

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
        }

        function setCarouselHeight(carousel, slides) {
            var maxHeight = 0;
            Array.prototype.forEach.call(slides, function(slide) {
                if (slide.offsetHeight > maxHeight) {
                    maxHeight = slide.offsetHeight;
                }
            });
            carousel.style.height = maxHeight + 'px';
        }
    });
});
