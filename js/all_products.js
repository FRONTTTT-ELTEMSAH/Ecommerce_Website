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

// Filter

let filtersection = document.querySelector(".filter");
let nameListOfFitter = ["Categories", "Brand", "Colors"];
filterProduct = "";
for (let i = 0; i < 2; i++) {
  filterProduct += `
  <div class="depart">
  <h3>${nameListOfFitter[i]}</h3>
  <hr>
  <div class="item">
      <span>Phone</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Tablets</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Experiance</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Phone</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Tv</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Wordpress</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>VsCode</span>
      <input type="checkbox">
  </div>
  <div class="item">
      <span>Wartches</span>
      <input type="checkbox">
  </div>
</div>
  `;
  filtersection.innerHTML = filterProduct;
  filtersection.innerHTML += `
    <div class="depart">
  <h3>Colors</h3>
  <hr>
  <div class="item">
      <span>Red</span>
      <div style = "width : 20px ; height : 20px ; background-color : red ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Blue</span>
      <div style = "width : 20px ; height : 20px ; background-color : blue ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Orange</span>
      <div style = "width : 20px ; height : 20px ; background-color : orange ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Green</span>
      <div style = "width : 20px ; height : 20px ; background-color : green ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Aqua</span>
      <div style = "width : 20px ; height : 20px ; background-color : aqua ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Black</span>
      <div style = "width : 20px ; height : 20px ; background-color : black ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Yellow</span>
      <div style = "width : 20px ; height : 20px ; background-color : yellow ; border-radius : 5px"></div>
  </div>
  <div class="item">
      <span>Burble</span>
      <div style = "width : 20px ; height : 20px ; background-color : purple ; border-radius : 5px"></div>
  </div>
</div>
  `;
}
// Open filter Menu

let filterBtn = document.querySelector(".filtering");

filterBtn.addEventListener("click", () => {
  filtersection.style.display = "block"
});

// Fetch Json File

fetch("/js/items.json")
  .then((response) => response.json())
  .then((data) => {
    info = data;
    data.forEach((product) => {
      let all_products = document.getElementById("all_product");
      let pro = `
      <div class="product_item swiper-slide"">
      <img src="${product.imgUrl}.jpg" alt="">
      <img  src="${product.imgUrl2}.jpg" alt="">
      <div class="product_name">
          <h3><a href="item.html" class ="visit">${product.productName}</a></h3>
          <div class="starts">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
          </div>
          <div class="price">
              <span>${product.priceSale}</span>
              <span>${product.priceReal}</span>
          </div>
      </div>
      <div class="reacts_product">
          <i onclick = "addTocart(${product.id} , this)" class="fa-solid fa-cart-shopping" id="addCart"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-share"></i>
      </div>
    </div>
      
      
      
      `;
      all_products.innerHTML += pro;
    });
  });

// Function add To Cart

let cartItems = document.querySelector(".cart_content");
let info;
let list = [];
function addTocart(id, btn) {
  list.push(info[id]);
  btn.classList.add("active");
  getdata();
}

let countProduct = document.getElementById("countProduct");
let count_item = document.getElementById("count_item");
let total_salary = document.getElementById("total_salary");
function getdata() {
  let total = 0;
  let item_c = "";

  for (let i = 0; i < list.length; i++) {
    item_c += `<div class="product">
        <img src="${list[i].imgUrl}.jpg" alt="">
        <div class="info_product">
            <p>${list[i].productName}</p>
            <small>$${list[i].priceSale}</small>
        </div>
        <i onclick = "remove(${i})" class="fa-solid fa-trash-can"></i>
      </div>
        `;
    total += +list[i].priceSale;

    cartItems.innerHTML = item_c;
    count_item.innerHTML = list.length;
    countProduct.innerHTML = `(${list.length} item in Cart)`;
    total_salary.innerHTML = `$${total}`;
  }
}
getdata();
// Function remove Items

function remove(index) {
  list.splice(index, 1);
  getdata();
  let addTOCartBtns = document.querySelectorAll(".fa-cart-shopping");
  for (let i = 0; i < addTOCartBtns.length; i++) {
    addTOCartBtns[i].classList.remove("active");
    cartItems.forEach((product) => {
      if (product.id == i) {
        addTOCartBtns[i].classList.add("active");
      }
    });
  }
}

let openMenu = document.getElementById("menueOpen");
let closeMenu = document.getElementById("closeMenu");
let navList = document.querySelector(".navlist");
openMenu.addEventListener("click", () => {
  navList.classList.add("showList");
});
closeMenu.addEventListener("click", () => {
  navList.classList.remove("showList");
});
