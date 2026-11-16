
// Typing animation
const typingText = [
    "Computer Science Student",
    "Web Developer",
    "Creative Learner"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {

    let currentText = typingText[textIndex];

    document.getElementById("typing").textContent =
        currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % typingText.length;
            typeText();
        }, 1500);
    } else {
        setTimeout(typeText, 100);
    }
}

typeText();


// Navbar active link
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", function () {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Section reveal animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
