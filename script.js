// =====================================================
// NAZANIN PORTFOLIO
// Main JavaScript
// =====================================================


// =====================================================
// PROJECT DATABASE
// =====================================================

const projects = [

    // =========================
    // PYTHON PROJECTS
    // =========================

    {
        name: "Hotel Management System",
        language: "python",
        category: "Python · OOP",
        description:
            "A hotel management system built with Python and Object-Oriented Programming.",
        icon: "🏨",
        github:
            "https://github.com/nazaninyazdi/Python"
    },

    {
        name: "Shopping Cart",
        language: "python",
        category: "Python · OOP",
        description:
            "A shopping cart application for managing products and purchases.",
        icon: "🛒",
        github:
            "https://github.com/nazaninyazdi/Python"
    },

    {
        name: "Library Management",
        language: "python",
        category: "Python · OOP",
        description:
            "A simple library management project created while practicing OOP concepts.",
        icon: "📚",
        github:
            "https://github.com/nazaninyazdi/Python"
    },

    {
        name: "Number Guessing Game",
        language: "python",
        category: "Python · Game",
        description:
            "An interactive number guessing game based on random numbers and user input.",
        icon: "🎯",
        github:
            "https://github.com/nazaninyazdi/Python"
    },

    {
        name: "Random Number Game",
        language: "python",
        category: "Python · Game",
        description:
            "A small Python game based on random numbers and user interaction.",
        icon: "🎲",
        github:
            "https://github.com/nazaninyazdi/Python"
    },


    // =========================
    // C++ PROJECTS
    // =========================

    {
        name: "Rock Paper Scissors",
        language: "cpp",
        category: "C++ · Game",
        description:
            "A classic Rock Paper Scissors game implemented in C++.",
        icon: "🎮",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Shop",
        language: "cpp",
        category: "C++",
        description:
            "A simple shopping program created while practicing C++ programming.",
        icon: "🛍️",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Gym Information Card",
        language: "cpp",
        category: "C++",
        description:
            "A C++ project for handling and displaying gym information.",
        icon: "🏋️",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Average Calculator",
        language: "cpp",
        category: "C++ · Algorithm",
        description:
            "A simple C++ program for calculating the average of numbers.",
        icon: "📊",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Fibonacci",
        language: "cpp",
        category: "C++ · Algorithm",
        description:
            "A C++ programming exercise for generating Fibonacci numbers.",
        icon: "🔢",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Factorial",
        language: "cpp",
        category: "C++ · Algorithm",
        description:
            "A simple C++ implementation for calculating factorials.",
        icon: "🧮",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Prime Number",
        language: "cpp",
        category: "C++ · Algorithm",
        description:
            "A C++ exercise for working with prime numbers.",
        icon: "🔢",
        github:
            "https://github.com/nazaninyazdi/CPP"
    },

    {
        name: "Odd & Even",
        language: "cpp",
        category: "C++ · Logic",
        description:
            "A simple program that determines whether numbers are odd or even.",
        icon: "⚡",
        github:
            "https://github.com/nazaninyazdi/CPP"
    }

];


// =====================================================
// DOM ELEMENTS
// =====================================================

const projectsGrid =
    document.getElementById("all-projects-grid");

const filterButtons =
    document.querySelectorAll(".filter-button");


// =====================================================
// RENDER PROJECTS
// =====================================================

function renderProjects(filter = "all") {

    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = "";

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                project =>
                    project.language === filter
            );


    filteredProjects.forEach(
        (project, index) => {

            const projectElement =
                document.createElement("article");


            projectElement.classList.add(
                "small-project-card"
            );


            projectElement.innerHTML = `

                <div class="small-project-top">

                    <span class="small-project-icon">
                        ${project.icon}
                    </span>

                    <span class="small-project-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>


                <div class="small-project-content">

                    <span class="small-project-category">
                        ${project.category}
                    </span>

                    <h3>
                        ${project.name}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                </div>


                <div class="small-project-bottom">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project ↗
                    </a>

                </div>

            `;


            projectsGrid.appendChild(
                projectElement
            );

        }
    );

}


// =====================================================
// INITIAL PROJECT LOAD
// =====================================================

renderProjects();


// =====================================================
// PROJECT FILTER
// =====================================================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    btn => {
                        btn.classList.remove(
                            "active"
                        );
                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                renderProjects(filter);

            }
        );

    }
);


// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }
);


// =====================================================
// SMOOTH SCROLL
// =====================================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


// =====================================================
// SCROLL REVEAL
// =====================================================

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-text, " +
        ".about-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".github-card, " +
        ".contact-content"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

        revealObserver.observe(
            element
        );

    }
);


// =====================================================
// MOUSE GLOW EFFECT ON CARDS
// =====================================================

document.addEventListener(
    "mousemove",
    event => {

        const cards =
            document.querySelectorAll(
                ".project-card, .small-project-card, .skill-card"
            );


        cards.forEach(
            card => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                if (
                    x >= 0 &&
                    x <= rect.width &&
                    y >= 0 &&
                    y <= rect.height
                ) {

                    card.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );

                }

            }
        );

    }
);


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 200;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


// =====================================================
// TYPING EFFECT
// =====================================================

const heroTitle =
    document.querySelector(
        ".hero-content h2"
    );


const typingTexts = [

    "Python & C++ Developer",

    "Creative Programmer",

    "Problem Solver",

    "Future Software Engineer"

];


let textIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!heroTitle) {
        return;
    }


    const currentText =
        typingTexts[textIndex];


    if (!deleting) {

        heroTitle.textContent =
            currentText.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentText.length
        ) {

            deleting = true;


            setTimeout(
                typeEffect,
                1800
            );


            return;

        }

    } else {

        heroTitle.textContent =
            currentText.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (
            characterIndex === 0
        ) {

            deleting = false;


            textIndex =
                (textIndex + 1) %
                typingTexts.length;

        }

    }


    const speed =
        deleting
            ? 45
            : 85;


    setTimeout(
        typeEffect,
        speed
    );

}


setTimeout(
    typeEffect,
    1200
);


// =====================================================
// PARALLAX GLOW EFFECT
// =====================================================

const glows =
    document.querySelectorAll(
        ".glow"
    );


window.addEventListener(
    "mousemove",
    event => {

        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;


        glows.forEach(
            (glow, index) => {

                const strength =
                    (index + 1) * 12;


                glow.style.transform =
                    `translate(
                        ${x * strength}px,
                        ${y * strength}px
                    )`;

            }
        );

    }
);


// =====================================================
// EXTERNAL LINKS SECURITY
// =====================================================

document.querySelectorAll(
    'a[target="_blank"]'
).forEach(
    link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    }
);


// =====================================================
// PAGE LOADED
// =====================================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


// =====================================================
// EMAIL BUTTON
// =====================================================

const emailButtons =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );


emailButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening email client..."
                );

            }
        );

    }
);