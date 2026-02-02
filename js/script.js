document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // 1. Theme Logic
    // Default to 'theme-dark' if nothing saved
    const savedTheme = localStorage.getItem('theme') || 'theme-dark';
    body.className = savedTheme; // Reset class list to saved theme
    
    // Ensure text button is correct on load
    if (themeToggle) themeToggle.textContent = savedTheme === 'theme-dark' ? 'LGT' : 'DRK';

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('theme-dark')) {
                body.classList.replace('theme-dark', 'theme-bright');
                localStorage.setItem('theme', 'theme-bright');
                themeToggle.textContent = 'DRK'; // Button to switch back to Dark
            } else {
                body.classList.replace('theme-bright', 'theme-dark');
                localStorage.setItem('theme', 'theme-dark');
                themeToggle.textContent = 'LGT'; // Button to switch to Light
            }
        });
    }

    // 2. Mobile Menu Logic
    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            
            // Lock scroll when menu is open
            if(mainNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
});