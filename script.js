
// Select all sections
const sections = document.querySelectorAll("section");


// Scroll animation
const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


// Apply animation to sections
sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// Highlight active navigation link
window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(function(link) {

        link.style.borderBottom = "none";

        if (link.getAttribute("href") === "#" + current) {
            link.style.borderBottom = "1px solid #302080";
        }

    });

});
