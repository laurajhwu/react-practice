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

/* ==========================
Request 3: click to display more sample posts
========================== */
const more = document.querySelector('.see-more');
const hiddenSample = document.querySelector('#hidden-sample')
// Display and hide hidden content when clicking see more button
more.addEventListener('click', event => {
    if (event.target.matches('.more-btn') || event.target.matches('.style-arrow')) {
        hiddenSample.classList.toggle('no-display');
        /* button text is 'See More' when content is hidden
        and is 'See Less' when content is displayed 
        */
        const moreButton = more.firstElementChild;
        if (moreButton.innerText === "See More") {
            moreButton.innerText = 'See Less';
        } else {
            moreButton.innerText = 'See More';
        }
    }
})

