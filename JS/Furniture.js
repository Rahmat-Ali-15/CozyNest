import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

let cartApi = `https://api-server-zecj.onrender.com/product_cart`;

const fetchApi = async () => {
  let api = "https://api-server-zecj.onrender.com/Modern-Furniture";
  let loading = document.querySelector(".loading");
  let largeVisNavSlider = document.querySelector(".largeVisNav-slider");
  largeVisNavSlider.style.height = "250px";

  try {
    // Show loading message before fetch
    loading.style.display = "block";

    let res = await fetch(api);
    let data = await res.json();

    // Slider data
    renderLargeVisNavFurniture(data.Furniture.largeVisNav);

    // Convert into arrays
    let lounge = Object.values(data.Furniture.main_product.lounge).flat();
    let axis = Object.values(data.Furniture.main_product.axis).flat();
    let retreat = Object.values(data.Furniture.main_product.retreat).flat();
    let unwind = Object.values(data.Furniture.main_product.unwind).flat();
    let walnut_storage = Object.values(
      data.Furniture.main_product.walnut_storage
    ).flat();
    let walnut_bookshelf = Object.values(
      data.Furniture.main_product.walnut_bookshelf
    ).flat();
    let bisou_chair = Object.values(
      data.Furniture.main_product.bisou_chair
    ).flat();
    let keane = Object.values(data.Furniture.main_product.keane).flat();

    // All use same function
    renderFurniture(lounge);
    renderFurniture(axis);
    renderFurniture(retreat);
    renderFurniture(unwind);
    renderFurniture(walnut_storage);
    renderFurniture(walnut_bookshelf);
    renderFurniture(bisou_chair);
    renderFurniture(keane);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  } finally {
    loading.style.display = "none";
    largeVisNavSlider.style.height = "fit-content";
  }
};

const renderLargeVisNavFurniture = (arr) => {
  let largeVisNavSlider = document.querySelector(".largeVisNav-slider");

  arr.forEach((el) => {
    let slide = document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML = `
      <a href="#">
          <div class="media-container">
              <img src=${el.img} alt="">
          </div>
          <div class="renew-copy-container">
              <p>${el.caption}</p>
          </div>
      </a>
    `;

    largeVisNavSlider.append(slide);
  });
};

// Reusable function for rendering product cards
const renderFurniture = (arr) => {
  let productCardContainer = document.querySelector(".product-card-container");

  arr.forEach((el) => {
    let productCardContent = document.createElement("div");
    productCardContent.classList.add("product-card-content");

    // Make dynamic images + color bars safely
    let bigImages = el.img
      .map((img) => `<img src="${img}" alt="img">`)
      .join("");

    let colorBars = el.colorBar
      .map(
        (c) => `<div class="colorbar-box"><img src="${c}" alt="color"></div>`
      )
      .join("");

    let productPrice =
      "₹ " +
      Number(el.price).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    productCardContent.innerHTML = `
      <ul>
          <li class="product-card">
              <div class="product-img">${bigImages}</div>
              <div class="product-details">
                  <div class="product-colorbar-container">${colorBars}</div>
                  <div class="product-details-description">
                      <div class="product-name">${el.caption}</div>
                      <div class="product-range-price">
                          <span>${productPrice}</span>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
    `;

    productCardContainer.append(productCardContent);

    // Select images
    let bigImgs = productCardContent.querySelectorAll(".product-img img");
    let smallImgs = productCardContent.querySelectorAll(".colorbar-box img");

    // Default: show only first big image
    bigImgs.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
      
      img.addEventListener("click", () => {
        let selectedProduct = {
          id: el.id,
          selectedImg: img.src,
        };
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct))
        window.location = "../HTML/Product_Details.html";

      });
    });

    // On clicking colorbar → switch image
    smallImgs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        bigImgs.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
        });
      });
    });
  });
};

window.onload = () => {
  fetchApi();
};
