/* ==========================
Request 1:
    'Welcome Message' changes to "Have a Good Time!" when intro block is clicked
========================== */
const intro = document.querySelector('.intro');

intro.addEventListener('click', () => {
    document.querySelector('.intro h2').innerText = "Have a Good Time!";
})

/* ==========================
Request 2: click to show and close menu
========================== */
const header = document.querySelector('header');
const mainNav = document.querySelector('.main-nav');

header.addEventListener('click', event => {
    // clicking on the hamburger shows and closes the navigation menu
    if (event.target.matches('[id=hamburger]')) {
        mainNav.classList.toggle('show-menu');
    }
    // clicking on the exit button in the navigation menu closes the menu
    if (event.target.matches('.exit-btn')) {
        mainNav.classList.remove('show-menu');
    }
})

