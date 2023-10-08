// Active item in the navigation menu----------------------------------------
let ulList = document.querySelector(".menu-list");
let selectedLi;

ulList.onclick = function (event) {
    let li = event.target.closest(".menu-list li");

    if (!li) return;

    if (!ulList.contains(li)) return;

    active(li);
};

function active(li) {
    if (selectedLi) {
        selectedLi.classList.remove("active");
    }
    selectedLi = li;
    selectedLi.classList.add("active");
}

// Hidden navigation menu----------------------------------------------------
document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;
    
    if (targetItem.closest(".header-container,.menu-list li span")) {
        document.documentElement.classList.toggle("menu-open");
    }
}

// Parallax Effect----------------------------------------------------
const parallaxHelp = document.getElementById("help");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;

    parallaxHelp.style.backgroundPositionY = offset * 0.2 + "px";
});

// Swiper----------------------------------------------------
const swiper = new Swiper(".mySwiper", {
    navigation: {
        spaceBetween: 0,
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    mousewheel: true,
    keyboard: true,
    hashNavigation: {
        watchState: true,
    },
    loop: true,
    speed: 700,
});