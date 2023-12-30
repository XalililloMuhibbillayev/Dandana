const body = document.querySelector("body");

const sidebar_icon = document.querySelector(".sidebar-icon i");
const sidebar = document.querySelector(".sidebar");
const xmark = document.querySelector(".xmark i");


const general = document.querySelector(".general");
const orders = document.querySelector(".orders");
const about_kafe = document.querySelector(".about-kafe");
const likes = document.querySelector(".likes");
const dislike = document.querySelector(".dislike");
const aplication = document.querySelector(".aplication");




sidebar_icon.addEventListener("click", function() {
    sidebar.classList.add("active");
    sidebar_icon.style.display = "none";
    body.style.overflow = "hidden"
});

xmark.addEventListener("click", function() {
    sidebar.classList.remove("active");
    sidebar_icon.style.display = "block";
    body.style.overflow = "auto"
});



general.addEventListener('click', () => {
    general.classList.add("sidebar-active");
    orders.classList.remove("sidebar-active");
    about_kafe.classList.remove("sidebar-active");
    likes.classList.remove("sidebar-active");
    dislike.classList.remove("sidebar-active");
    aplication.classList.remove("sidebar-active");
});

orders.addEventListener('click', () => {
    general.classList.remove("sidebar-active");
    orders.classList.add("sidebar-active");
    about_kafe.classList.remove("sidebar-active");
    likes.classList.remove("sidebar-active");
    dislike.classList.remove("sidebar-active");
    aplication.classList.remove("sidebar-active");
});

about_kafe.addEventListener('click', () => {
    general.classList.remove("sidebar-active");
    orders.classList.remove("sidebar-active");
    about_kafe.classList.add("sidebar-active");
    likes.classList.remove("sidebar-active");
    dislike.classList.remove("sidebar-active");
    aplication.classList.remove("sidebar-active");
});

likes.addEventListener('click', () => {
    general.classList.remove("sidebar-active");
    orders.classList.remove("sidebar-active");
    about_kafe.classList.remove("sidebar-active");
    likes.classList.add("sidebar-active");
    dislike.classList.remove("sidebar-active");
    aplication.classList.remove("sidebar-active");
});

dislike.addEventListener('click', () => {
    general.classList.remove("sidebar-active");
    orders.classList.remove("sidebar-active");
    about_kafe.classList.remove("sidebar-active");
    likes.classList.remove("sidebar-active");
    dislike.classList.add("sidebar-active");
    aplication.classList.remove("sidebar-active");
});

aplication.addEventListener('click', () => {
    general.classList.remove("sidebar-active");
    orders.classList.remove("sidebar-active");
    about_kafe.classList.remove("sidebar-active");
    likes.classList.remove("sidebar-active");
    dislike.classList.remove("sidebar-active");
    aplication.classList.add("sidebar-active");
});

// Count 
let plus = document.querySelector("#plus");
let text = document.querySelector("#count");
let minus = document.querySelector("#minus");

text.textContent = 0
plus.addEventListener("click", () => {
    text.textContent++
})
minus.addEventListener("click", () => {
    text.textContent--
    if (text.textContent < 0) {
        text.textContent = 0
    }
})