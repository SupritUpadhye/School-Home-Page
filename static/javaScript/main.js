// JS for Fixed Nav-bar
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("nav-contact-btn");
    const navContactCard = document.querySelector(".nav-contact-card");

    const dropdown = document.querySelector('.nav-item.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');


    // animation for dropdownmenu on mouse hover
    dropdown.addEventListener('mouseover', function () {
        dropdown.classList.add('show');
        dropdownToggle.setAttribute('aria-expanded', 'true');
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseout', function (event) {
        const relatedTarget = event.relatedTarget;
        if (!dropdown.contains(relatedTarget)) {
            dropdown.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('show');
        }
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        dropdown.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
    });

    // function for toggling animation of contact button after mouse hover
    contactBtn.addEventListener("mouseenter", function () {
        navContactCard.style.maxHeight = '40rem';
        navContactCard.style.transition = "0.5s";
    });


    // function for toggling animation of contact button after mouse click
    contactBtn.addEventListener("click", function () {
        if (navContactCard.style.maxHeight === "0rem") {
            navContactCard.style.maxHeight = "40rem";
        } else {
            navContactCard.style.maxHeight = "0rem";
        }
    });

    navbarTogglerBtn.addEventListener("click", function () {
        if (navContactCard.style.maxHeight > "0rem") {
            navContactCard.style.maxHeight = "0";
        }
    })

    window.addEventListener("scroll", function () {
        navContactCard.style.maxHeight = "0"
    });
})



document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown menu elements
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(function (dropdown) {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Toggle dropdown on mouse click
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        // Show dropdown on mouse hover
        dropdown.addEventListener('mouseenter', function () {
            dropdownMenu.classList.add('show');
        });

        // Hide dropdown when mouse leaves
        dropdown.addEventListener('mouseleave', function () {
            dropdownMenu.classList.remove('show');
        });
    });

    // Close all dropdowns on scroll
    window.addEventListener('scroll', function () {
        dropdowns.forEach(function (dropdown) {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });
});
