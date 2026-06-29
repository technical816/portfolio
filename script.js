/*==================================
   SUBHU CYBER PORTFOLIO
==================================*/

// ================================
// LOADER
// ================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ================================
// TYPING EFFECT
// ================================

const typingText = document.querySelector(".typing");

const words = [

    "Cybersecurity Enthusiast",

    "Linux Learner",

    "Networking Explorer",

    "Python Programmer",

    "Ethical Hacking Student",

    "Termux Power User"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();

// ================================
// STICKY NAVBAR
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.90)";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});

// ================================
// SMOOTH ACTIVE LINK
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

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

/*==================================
   MOBILE MENU
==================================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}

/*==================================
SCROLL REVEAL
==================================*/

const revealElements = document.querySelectorAll(

".skill-card,.project-card,.timeline-item,.service-card,.stat-box,.contact-box,.terminal"

);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

/*==================================
COUNTER
==================================*/

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const section = document.querySelector(".stats");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            let target = counter.innerText.replace(/\D/g, "");

            if (target === "") return;

            target = parseInt(target);

            let count = 0;

            const speed = Math.max(20, Math.floor(2000 / target));

            const update = () => {

                count++;

                counter.innerText = count + "+";

                if (count < target) {

                    setTimeout(update, speed);

                }

            };

            counter.innerText = "0";

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

/*==================================
CUSTOM CURSOR
==================================*/

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

}

/*==================================
BUTTON RIPPLE
==================================*/

document.querySelectorAll(".btn,.btn-outline").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/*==================================
YEAR AUTO UPDATE
==================================*/

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML = `© ${new Date().getFullYear()} Subhu Cyber Portfolio. All Rights Reserved.`;

}

console.log("%cSUBHU CYBER PORTFOLIO",

"color:#00ff88;font-size:20px;font-weight:bold;");

console.log("%cWebsite Loaded Successfully 🚀",

"color:#00d9ff;font-size:14px;");

emailjs.init("YwJHgT8Nolw6w4Gcv");

const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_9zx4c6z",
        "template_x29mspo",
        this
    ).then(() => {

        alert("✅ Message Sent Successfully!");

        form.reset();

    }, (error) => {

        alert("❌ Failed to send message.");

        console.log(error);

    });
});
