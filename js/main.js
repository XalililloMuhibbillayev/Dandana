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

function increment(e) {
    if(e.nextElementSibling.innerHTML!=0)e.nextElementSibling.innerHTML-=1;
};

function decrement(e) {
    e.previousElementSibling.innerHTML=parseInt(e.previousElementSibling.innerHTML)+1;
};

// Order Modal

const shop_icon = document.querySelector(".shop-icon i");
const order_modal = document.querySelector(".order-modal");
const order_xmark = document.querySelector(".order-xmark i");

shop_icon.addEventListener('click', () => {
    order_modal.style.display = 'flex';
    body.style.overflow = "hidden"
});

order_xmark.addEventListener('click', () => {
    order_modal.style.display = 'none';
    body.style.overflow = "auto"
});
