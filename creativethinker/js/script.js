// Burger
document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        e.preventDefault();
    }
});

// Scroll
window.onscroll = function () {
    myFunction();
};

let header = document.querySelector("header.header");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("_header-scroll");
    } if (window.pageYOffset <= sticky) {
        header.classList.remove("_header-scroll");
    }
}