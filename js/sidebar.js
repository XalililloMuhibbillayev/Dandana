const sidebar_icon = document.querySelector(".sidebar-icon a");
const sidebar = document.querySelector(".sidebar");
const xmark = document.querySelector(".xmark a");


const general = document.querySelector(".general");
const orders = document.querySelector(".orders");
const about_kafe = document.querySelector(".about_kafe");
const likes = document.querySelector(".likes");
const dislike = document.querySelector(".dislike");




sidebar_icon.addEventListener("click", () => {
    sidebar.classList.add("active");
    sidebar_icon.style.display = "none";
});

xmark.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebar_icon.style.display = "block";
});

general.addEventListener('click', () => {
    // general.style.background = "#F8B602";
});

orders.addEventListener('click', () => {
    // orders.style.background = "#F8B602";
});

about_kafe.addEventListener('click', () => {
    // about_kafe.style.background = "#F8B602";
});

likes.addEventListener('click', () => {
    // likes.style.background = "#F8B602";
});

dislike.addEventListener('click', () => {
    // dislike.style.background = "#F8B602";
});