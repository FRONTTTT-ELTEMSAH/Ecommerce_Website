// Fetch json file
fetch("/js/items.json")
  .then((response) => response.json())
  .then((data) => {
    collectionData = data;
    for (let i = 0; i < data.length; i++) {
      let products = document.querySelector(".products_items");
      if (data[i].discount) {
        let dataDiscount = data[i].discount
          ? `<span class="sale">%${Math.floor(
              ((data[i].priceReal - data[i].priceSale) / data[i].priceReal) *
                100
            )} </span>`
          : "";
        let pro = `
          <div class="product_item swiper-slide"">
          <img src="${data[i].imgUrl}.jpg" alt="">
          <img  src="${data[i].imgUrl2}.jpg" alt="">
          <div class="product_name">
              <h3><a href="item.html" class ="visit">${data[i].productName}</a></h3>
              <div class="starts">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
              </div>
              <div class="price">
                  <span>${data[i].priceSale}</span>
                  <span>${data[i].priceReal}</span>
              </div>
          </div>
          ${dataDiscount}
          <div class="reacts_product">
              <i onclick = "bringProduct(${data[i].id} , this)" class="fa-solid fa-cart-shopping" id="addCart"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
          </div>
        </div>
          `;
        products.innerHTML += pro;
      }
    }
    for (let i = 0; i < data.length; i++) {
      let categoriesItems = document.getElementById("Categories_items");
      let pro = `
        <div class="product_item swiper-slide"">
        <img src="${data[i].imgUrl}.jpg" alt="">
        <img  src="${data[i].imgUrl2}.jpg" alt="">
        <div class="product_name">
            <h3><a class ="visit" href="item.html">${data[i].productName}</a></h3>
            <div class="starts">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
                <span>${data[i].priceSale}</span>
                <span>${data[i].priceReal}</span>
            </div>
        </div>
        <div class="reacts_product">
            <i onclick = "bringProduct(${data[i].id} , this)" class="fa-solid fa-cart-shopping" id="addCart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-share"></i>
        </div>
      </div>
        `;
      categoriesItems.innerHTML += pro;
    }

    for (let i = 0; i < data.length; i++) {
      let categoriesItems2 = document.getElementById("Categories_items2");
      let pro = `
        <div class="product_item swiper-slide"">
        <img src="${data[i].imgUrl}.jpg" alt="">
        <img  src="${data[i].imgUrl2}.jpg" alt="">
        <div class="product_name">
            <h3><a class ="visit" href="item.html">${data[i].productName}</a></h3>
            <div class="starts">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
                <span>$${data[i].priceSale}</span>
            </div>
        </div>
        <div class="reacts_product">
            <i onclick = "bringProduct(${data[i].id} , this)" class="fa-solid fa-cart-shopping" id="addCart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-share"></i>
        </div>
      </div>
        `;
      categoriesItems2.innerHTML += pro;
    }
  });
