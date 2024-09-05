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

