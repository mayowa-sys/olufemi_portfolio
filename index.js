document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('desktopNavbar');

    // Function to handle scroll event for navbar background
    function handleScroll() {
        if (window.pageYOffset > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Collapse the navbar after a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    const topnav = document.getElementById('myTopnav');
    const links = topnav.querySelectorAll('a:not(.icon)'); // Target all links except the icon

    links.forEach(link => {
        link.addEventListener('click', function () {
            // Collapse the navbar
            if (topnav.className.includes('responsive')) {
                topnav.className = 'topnav';
            }
        });
    });
});

let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("bio-img");
            let dots = document.getElementsByClassName("dot");

            // Hide all slides initially
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // Reset the index if it's greater than the number of slides
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }

            // Remove active state from all dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            // Display the current slide and highlight the dot
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            // Set the timing for the slideshow (e.g., 5 seconds)
            setTimeout(showSlides, 5000);
            
        }

        // Optional: Function for manual navigation using dots
        function currentSlide(n) {
            slideIndex = n - 1;
            showSlides();
        }


