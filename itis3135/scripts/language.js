document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            sections.forEach(section => {
                section.classList.remove("active");
            });

            targetSection.classList.add("active");
        });
    });
});
