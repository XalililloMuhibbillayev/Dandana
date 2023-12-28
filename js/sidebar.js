const sidebar_icon = document.querySelector(".sidebar-icon a");
const sidebar = document.querySelector(".sidebar");
const xmark = document.querySelector(".xmark a");


const general = document.querySelector(".general");
const orders = document.querySelector(".orders");
const about_kafe = document.querySelector(".about-kafe");
const likes = document.querySelector(".likes");
const dislike = document.querySelector(".dislike");
const aplication = document.querySelector(".aplication");




sidebar_icon.addEventListener("click", () => {
    sidebar.classList.add("active");
    sidebar_icon.style.display = "none";
});

xmark.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebar_icon.style.display = "block";
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