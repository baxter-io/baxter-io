document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navlinks').classList.toggle('active');
});
// Your JavaScript code, including the toggleMenu() function
function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
}