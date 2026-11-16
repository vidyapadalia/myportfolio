
// SCROLL REVEAL

const sections = document.querySelectorAll("section");

sections.forEach(function(section) {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(function(section) {
    observer.observe(section);
});


// ACTIVE NAVIGATION

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// CLOSE NAVIGATION AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("open");
    });
});
