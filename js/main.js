// open & close Cart
let cart = document.querySelector(".cart");
let btnCart = document.getElementById("btnCart");
let closeCartBtn = document.getElementById("closeCart");

// open cart
btnCart.addEventListener("click", openCart);
// close cart
closeCartBtn.addEventListener("click", closeCart);
// function open cart

function openCart() {
  cart.classList.add("open");
}
// function open cart
function closeCart() {
  cart.classList.remove("open");
}

// Create Feature Products In page
let features = document.querySelector(".features_items");

let featureName = ["High Quality", "Offer Money", "Privacy", "Case Cart"];

for (let i = 0; i < 4; i++) {
  let feature = `
  <div class="feature_item">
  <img src="img/features${i + 1}.png" alt="">
  <div class="info">
      <h4>${featureName[i]}</h4>
      <p>Lorem ipsum dolor sit amet.</p>
  </div>

  `;
  features.innerHTML += feature;
}
// Create Prodcuts In Page

// FUNCTION ADD TO CART

let collectionData;
let cartConetnt = document.querySelector(".cart_content");
let productCart = [];

function bringProduct(id, btn) {
  let prod = collectionData[id];
  productCart.push(prod);
  btn.classList.add("active");
  if (cartConetnt == "") {
    btn.classList.remove("active");
  }
  addproduct();
}

let totalSalary = document.querySelector("#total_salary");
let countItem = document.querySelector("#count_item");
let countProduct = document.querySelector("#countProduct");
let priceCartTotal = document.querySelector("#priceCartTotal");
function addproduct() {
  let total = 0;
  let items = "";
  for (let i = 0; i < productCart.length; i++) {
    items += `<div class="product">
    <img src="${productCart[i].imgUrl}.jpg" alt="">
    <div class="info_product">
        <p>${productCart[i].productName}</p>
        <small>$${productCart[i].priceSale}</small>
    </div>
    <i onclick = "removeCart(${i})" class="fa-solid fa-trash-can"></i>
  </div>`;
    total += +productCart[i].priceSale;
  }

  cartConetnt.innerHTML = items;
  totalSalary.innerHTML = "$" + total;
  countItem.innerHTML = productCart.length;
  countProduct.innerHTML = `(${productCart.length} item in Cart)`;
  priceCartTotal.innerHTML = "$" + total;
}

// FUNCTION REMOVE PRODUCT FROM CART

function removeCart(index) {
  productCart.splice(index, 1);
  console.log(index);
  addproduct();
  let addTOCartBtns = document.querySelectorAll(".fa-cart-shopping");
  for (let i = 0; i < addTOCartBtns.length; i++) {
    addTOCartBtns[i].classList.remove("active");
    productCart.forEach((product) => {
      if (product.id == i) {
        addTOCartBtns[i].classList.add("active");
      }
    });
  }
}

// scroll To Top

let scrollTop = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

let openMenu = document.getElementById("menueOpen");
let closeMenu = document.getElementById("closeMenu");
let navList = document.querySelector(".navlist");
openMenu.addEventListener("click", () => {
  navList.classList.add("showList");
});
closeMenu.addEventListener("click", () => {
  navList.classList.remove("showList");
});

