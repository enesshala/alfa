// Preloader
// function hidePreloader() {
//     let preloader = document.getElementById('preloader');
//     preloader.style.opacity = '0';
//     setTimeout(function () {
//         preloader.style.display = "none";
//     }, 300);
// }

// navbar
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("container").style.opacity = "0";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("container").style.opacity = "1";
}