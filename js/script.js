// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 800);

});

// =========================
// TYPING EFFECT
// =========================

const words = [
    "AI Enthusiast",
    "Python Programmer",
    "Data Science Student",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;

            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".card h1");

const runCounter = (counter) => {

    let target = counter.innerText.replace("+", "");

    if (target === "∞") return;

    target = Number(target);

    let count = 0;

    const increment = target / 100;

    const update = () => {

        count += increment;

        if (count < target) {

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(update);

        } else {

            if (target === 2027)
                counter.innerText = "2027";
            else
                counter.innerText = target + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const nums = entry.target.querySelectorAll("h1");

            nums.forEach(runCounter);

            observer.unobserve(entry.target);

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    observer.observe(card);

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".skill,.project,.card,#about,.hero-content,.hero-image");

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top)
            current = section.id;

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.href.includes(current))
            link.classList.add("active");

    });

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.onclick = () => {

        if (nav.style.display === "flex") {

            nav.style.display = "none";

        } else {

            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "80px";
            nav.style.right = "20px";
            nav.style.background = "#0f172a";
            nav.style.padding = "20px";
            nav.style.borderRadius = "10px";

        }

    };

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});