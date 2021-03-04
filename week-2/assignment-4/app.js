/* ==========================
Request 1:
    'Welcome Message' changes to "Have a Good Time!" when intro block is clicked
========================== */
const intro = document.querySelector('.intro');

intro.addEventListener('click', () => {
    document.querySelector('.intro h2').innerText = "Have a Good Time!";
})