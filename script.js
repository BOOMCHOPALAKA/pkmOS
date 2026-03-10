// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close TOC on mobile after clicking a link
        const toc = document.getElementById('toc');
        if (toc && window.innerWidth < 1100) {
            toc.classList.remove('open');
        }
    });
});

// ========== TOC toggle ==========
const tocToggle = document.querySelector('.toc-toggle');
const toc = document.getElementById('toc');

if (tocToggle && toc) {
    tocToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toc.classList.toggle('open');
    });

    // Close TOC when clicking outside
    document.addEventListener('click', function (e) {
        if (!toc.contains(e.target)) {
            toc.classList.remove('open');
        }
    });
}

// ========== TOC active section highlight on scroll ==========
const tocLinks = document.querySelectorAll('.toc-link');
const sections = [];

tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
            sections.push({ el: section, link: link });
        }
    }
});

function updateActiveSection() {
    const scrollPos = window.scrollY + 120;

    let current = sections[0];
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= scrollPos) {
            current = sections[i];
        }
    }

    tocLinks.forEach(link => link.classList.remove('active'));
    if (current) {
        current.link.classList.add('active');
    }
}

let scrollTicking = false;
window.addEventListener('scroll', function () {
    if (!scrollTicking) {
        requestAnimationFrame(function () {
            updateActiveSection();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// Run on load
updateActiveSection();

// ========== FAQ accordion ==========
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('open');
        });

        // Open clicked one (if it wasn't already open)
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});
