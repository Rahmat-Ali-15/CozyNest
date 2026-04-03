const handleClickData = (element) => {
  console.log("🚀 ~ element:", element);
  localStorage.setItem("singlePageElement", JSON.stringify(element));
  setTimeout(() => {
    window.location = "/HTML/Product_Details.html";
  }, 100);
};


  <ul>
          <li class="product-card" id="product">
              <div class="product-img">${bigImages}</div>
              <div class="product-details">
                  <div class="product-colorbar-container">${colorBars}</div>
                  <div class="product-details-description">
                      <div class="product-name">${el.caption}</div>
                      <div class="product-range-price">
                          <span>${el.price}</span>
                      </div>
                  </div>
              </div>
          </li>
      </ul>


productCardContent.onclick = function () {
      handleClickData(el);
};




// const fetchApi = async () => {
//   let api = "https://api-server-zecj.onrender.com/Modern-Furniture";

//   let loading = document.querySelector(".loading");

//   try {
//     // Show loading message before fetch
//     let loading = document.querySelector(".loading");
//     loading.style.display = "block";

//     let res = await fetch(api);
//     let data = await res.json();
//     appendFurnitureData(data.Furniture.largeVisNav);
//     console.log("🚀 ~ appendFurnitureData:", data.Furniture.main_product);
//     console.log(data.Furniture.main_product.lounge);

//     let mainProduct = Object.values(data.Furniture.main_product.lounge).flat();
//     let mainProduct1 = Object.values(data.Furniture.main_product.axis).flat();
//     let mainProduct2 = Object.values(data.Furniture.main_product.retreat).flat();
//     let mainProduct3 = Object.values(data.Furniture.main_product.unwind).flat();

//     furnitureData(mainProduct);
//     furniture(mainProduct1)
//     furniture2(mainProduct2)
//     furniture3(mainProduct3)
//   } catch (error) {
//     console.log("🚀 ~ error:", error);
//   } finally {
//     loading.style.display = "none";
//   }
// };

// const furnitureData = (val) => {
//   let productCardContainer = document.querySelector(".product-card-container");

//   val.forEach((el) => {
//     let productCardContent = document.createElement("div");
//     productCardContent.classList.add("product-card-content");

//     productCardContent.innerHTML = `
//       <ul>
//           <li class="product-card">
//               <div class="product-img">
//                   <img src=${el.img[0]} alt="img">
//                   <img src=${el.img[1]} alt="img">
//                   <img src=${el.img[2]} alt="img">
//                   <img src=${el.img[3]} alt="img">
//                   <img src=${el.img[4]} alt="img">
//               </div>
//               <div class="product-details">
//                   <div class="product-colorbar-container">
//                       <div class="colorbar-box">
//                         <img src=${el.colorBar[0]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[1]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[2]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[3]} alt="img">
//                       </div>
//                       <div class="colorbar-box">
//                           <img src=${el.colorBar[4]} alt="img">
//                       </div>
//                   </div>
//                   <div class="product-details-description">
//                       <div class="product-name">${el.caption}</div>
//                       <div class="product-range-price">
//                           <span>${el.price}</span>
//                       </div>
//                   </div>
//               </div>
//           </li>
//       </ul>
//     `;

//     productCardContainer.append(productCardContent);

//     // Select newly created elements
//     let bigImgs = productCardContent.querySelectorAll(".product-img img");
//     let smallImgs = productCardContent.querySelectorAll(".colorbar-box img");

//     // Default: show only first big image
//     bigImgs.forEach((img, i) => {
//       img.style.display = i === 0 ? "block" : "none";
//     });

//     // On clicking small image → show corresponding big image
//     smallImgs.forEach((thumb, index) => {
//       thumb.addEventListener("click", () => {
//         bigImgs.forEach((img, i) => {
//           img.style.display = i === index ? "block" : "none";
//         });
//       });
//     });
//   });
// };













// Open dropdown
// let filterType = document.querySelector(".filter-type");
// let filterTypeDrop = document.querySelector(".type-dropdown-content");
// let typeDown = document.querySelector(".bi-chevron-down")
// let typeUp = document.querySelector(".bi-chevron-up")

// filterType.addEventListener("click", () => {
//   filterTypeDrop.classList.toggle("type-dropdown");
//   filterCategoryDrop.classList.remove("category-dropdown");

//   // If dropdown is open → show UP icon
//   if (filterTypeDrop.classList.contains("type-dropdown")) {
//     typeDown.style.display = "none";
//     typeUp.style.display = "inline-block";
//   }
//   // If dropdown is closed → show DOWN icon
//   else {
//     typeDown.style.display = "inline-block";
//     typeUp.style.display = "none";
//   }
// });

// let filterCategory = document.querySelector(".filter-category");
// let filterCategoryDrop = document.querySelector(".category-dropdown-content");
// let catDown = document.querySelector(".bi-chevron-down")
// let catUp = document.querySelector(".bi-chevron-up")

// filterCategory.addEventListener("click", () => {
//   filterCategoryDrop.classList.toggle("category-dropdown");
//   filterTypeDrop.classList.remove("type-dropdown");

//   if (filterCategoryDrop.classList.contains("category-dropdown")) {
//     // hideFunction();
//     catDown.style.display = "none";
//     catUp.style.display = "inline-block";
//   }
//   // If dropdown is closed → show DOWN icon
//   else {
//     catDown.style.display = "inline-block";
//     catUp.style.display = "none";
//   }
// });

// function setupDropdown(dropSelector) {
//     const dropBox = document.querySelector(dropSelector);
//     if (!dropBox) return;

//     // use button if exists, else use the first div as click trigger
//     const toggleBtn = dropBox.querySelector("button") || dropBox.firstElementChild;

//     const dropdownContent = dropBox.querySelector("div[class$='dropdown-content']");
//     const iconDown = dropBox.querySelector(".bi-chevron-down");
//     const iconUp = dropBox.querySelector(".bi-chevron-up");

//     if (!dropdownContent || !toggleBtn) return;

//     toggleBtn.addEventListener("click", (e) => {
//         e.stopPropagation();

//         // close other dropdowns
//         document.querySelectorAll(".filter-box, .dropdown-filter").forEach(box => {
//             if (box !== dropBox) {
//                 const content = box.querySelector("div[class$='dropdown-content']");
//                 const down = box.querySelector(".bi-chevron-down");
//                 const up = box.querySelector(".bi-chevron-up");

//                 if (content) content.style.display = "none";
//                 if (down) down.style.display = "inline-block";
//                 if (up) up.style.display = "none";
//             }
//         });

//         // Toggle this dropdown
//         const isOpen = dropdownContent.style.display === "grid";
//         dropdownContent.style.display = isOpen ? "none" : "grid";

//         if (iconDown) iconDown.style.display = isOpen ? "inline-block" : "none";
//         if (iconUp) iconUp.style.display = isOpen ? "none" : "inline-block";
//     });
// }
// setupDropdown(".filter-type");
// setupDropdown(".filter-category");
// setupDropdown(".filter-color");
// setupDropdown(".filter-price");
// setupDropdown(".filter-material");

// const filterDropdownData = {
//   type: [
//     { label: "Sectionals", count: 871 },
//     { label: "Lounge Chairs", count: 243 },
//     { label: "Dining Chairs", count: 150 },
//     { label: "Furniture Covers", count: 127 },
//     { label: "Sofas", count: 102 },
//     { label: "Media Consoles", count: 78 },
//     { label: "Media Consoles", count: 78 },
//     { label: "Sectional Pieces", count: 319 },
//     { label: "Chaises", count: 237 },
//     { label: "Ottomans", count: 136 },
//     { label: "Sofa Cushions", count: 122 },
//     { label: "Swivel Chairs", count: 86 },
//   ],
//   category: [
//     { label: "Living Room Furniture", count: 2251 },
//     { label: "Dining And Kitchen Furniture", count: 341 },
//     { label: "Bedroom Furniture", count: 168 },
//     { label: "Storage And Modular Furniture", count: 151 },
//     { label: "Outdoor Furniture", count: 122 },
//     { label: "Home Office Furniture", count: 95 },
//     { label: "Baby And Kids Furniture", count: 36 },
//     { label: "Storage And Organization", count: 19 },
//     { label: "Baby And Kids Lighting", count: 2 },
//     { label: "Kids Gear", count: 1 },
//   ],
//   colors: [
//     { label: "White", count: 407 },
//     { label: "Black", count: 287 },
//     { label: "Natural", count: 743 },
//     { label: "Customizable", count: 1295 },
//     { label: "Multicolor", count: 17 },
//     { label: "Blue", count: 142 },
//     { label: "Gold", count: 17 },
//     { label: "Yellow", count: 3 },
//     { label: "Pink", count: 1 },
//     { label: "Off White", count: 388 },
//     { label: "Brown", count: 811 },
//     { label: "Grey", count: 879 },
//     { label: "Green", count: 203 },
//     { label: "Clear", count: 7 },
//     { label: "Red", count: 10 },
//     { label: "Silver", count: 16 },
//     { label: "Orange", count: 6 },
//   ],
//   priceRanges: [
//     { label: "$0 to $10", count: 5 },
//     { label: "$10 to $20", count: 7 },
//     { label: "$50 to $100", count: 36 },
//     { label: "$250 to $500", count: 352 },
//     { label: "$1000 to $1500", count: 521 },
//     { label: "$2000 to $3000", count: 595 },
//     { label: "$4000 to $5000", count: 226 },
//     { label: "$20 to $50", count: 36 },
//     { label: "$100 to $250", count: 187 },
//     { label: "$500 to $1000", count: 469 },
//     { label: "$1500 to $2000", count: 515 },
//     { label: "$3000 to $4000", count: 337 },
//     { label: "$5000 to $7000", count: 344 },
//     { label: "Over $7000", count: 170 },
//   ],
//   materials: [
//     { label: "Fabric", count: 1735 },
//     { label: "Metal", count: 179 },
//     { label: "Performance", count: 86 },
//     { label: "Acrylic", count: 155 },
//     { label: "Concrete", count: 22 },
//     { label: "Teak", count: 26 },
//     { label: "Performance Blend", count: 15 },
//     { label: "Wood", count: 1091 },
//     { label: "Glass", count: 96 },
//     { label: "Natural Material", count: 24 },
//     { label: "Stone", count: 22 },
//     { label: "Marble", count: 53 },
//     { label: "Leather", count: 629 },
//     { label: "Rattan", count: 25 },
//   ],
//   sortingOptions: [
//     "Most Relevant",
//     "Price, low to high",
//     "Price, high to low",
//     "New",
//     "Top Rated",
//   ],
// };

// let filterTypeBtn = document.querySelector(".filter-type");
// let container = document.querySelector(".type-dropdown-content");
// filterTypeBtn.addEventListener("click", () => {
//   filterDropdownData.type.forEach((el) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <input type="checkbox" />
//       <label>${el.label} (${el.count})</label>
//     `;
//     container.appendChild(div);
//   });
//   console.log("🚀 ~ filterDropdownData:", filterDropdownData.type);
// });




/* ========> Product details page ===========> */

// FIRST LOOP → thumbnails
  // val.map((el, index) => {
  //   let thumbImgDiv = document.createElement("div");
  //   thumbImgDiv.className = "thumb-img-div";

  //   let img = document.createElement("img");
  //   img.src = el.img;

  //   if (index === 0) {
  //     if (index === 0) {
  //       thumbImgDiv.classList.add("active");
  //     }
  //   }
  // if(imsStorage.thumbnail_img){
  //   let thumbImgDiv = document.createElement("div");
  //   thumbImgDiv.className = "thumb-img-div";

  //   let img = document.createElement("img");
  //   img.src = el.img;
  //   thumbImgDiv.append(img);
  //   thumbnailContainer.append(thumbImgDiv);
  // }




  
    // click logic yahin attach
  //   thumbImgDiv.addEventListener("click", () => {
  //     let allGalleryImgs =
  //       galleryImgContainer.querySelectorAll(".gallery-img-div");

  //     document.querySelectorAll(".thumb-img-div").forEach((div) => {
  //       div.classList.remove("active");
  //     });

  //     thumbImgDiv.classList.add("active");

  //     allGalleryImgs.forEach((div, i) => {
  //       div.style.display = i === index ? "inline-block" : "none";
  //     });
  //   });
  // ;

  // SECOND LOOP → gallery images
  // val.map((el, index) => {
  //   let galleryImgDiv = document.createElement("div");
  //   galleryImgDiv.className = "gallery-img-div";

  //   let img = document.createElement("img");
  //   img.src = el.img;

  //   let caption = document.createElement("p");

  //   // only first image visible initially
  //   galleryImgDiv.style.display = index === 0 ? "block" : "none";

  //   galleryImgDiv.append(img);
  //   galleryImgContainer.append(galleryImgDiv);
  // });






  // import { placeholder } from "../JS/Navbar_Footer.js";
  // placeholder();
  
  // const fetchApi = async () => {
  //   let api = "https://api-server-zecj.onrender.com/Modern-Furniture";
  //   try {
  //     let res = await fetch(api);
  //     let data = await res.json();
  //     renderThumbnail(data.Furniture.main_product.lounge[0].thumbnail_img);
  //     console.log("🚀 ~ data:", data.Furniture.main_product.lounge[0].thumbnail_img);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchApi();
  
  
  // const renderThumbnail = (val) => {
  //   let thumbnailContainer = document.querySelector(".left-thumbnail-container");
  
  //   let galleryImgContainer = document.querySelector(".gallery-img-container")
  
  //   val.map((el) => {
  //     let thumbImgDiv = document.createElement("div");
  //     thumbImgDiv.className = "thumb-img-div"
  //     let imgs = document.createElement("img");
  //     imgs.src = el.img;
  
  //     thumbImgDiv.append(imgs)
  //     thumbnailContainer.append(thumbImgDiv);
  //   });
  
  //   val.map((el) => {
  //     let galleryImgDiv = document.createElement("div");
  //     let imgs = document.createElement("img");
  //     imgs.src = el.img;
  
  //     galleryImgDiv.append(imgs)
  //     galleryImgContainer.append(galleryImgDiv);
  //   });
  // };







  // cart page full working code


  import { placeholder } from "./JS/Navbar_Footer.js";
placeholder();

/* =========================
   GET DATA FROM LOCALSTORAGE
========================= */

let cartItemsListStorage =
  JSON.parse(localStorage.getItem("cartItemsData")) || [];

console.log("🛒 Cart Items:", cartItemsListStorage);

/* =========================
   RENDER CART ITEMS
========================= */

const apendCartItems = () => {
  let productAddedCartContainer = document.querySelector(
    ".product-added-cart-container"
  );

  productAddedCartContainer.innerHTML = "";

  cartItemsListStorage.forEach((el, index) => {
    el.qty = el.qty || 1;

    let cartItemsContentDiv = document.createElement("div");
    cartItemsContentDiv.className = "cart-items-content-div";

    cartItemsContentDiv.innerHTML = `
      <div class="top-line-item-container">
        <div class="items-details">
          <h2 class="item-title">${el.title}</h2>
        </div>

        <div class="items-shop-bar">
          <div class="price-qty">
            <div class="item-qty">
              <button class="qty-decrease-btn">-</button>
              <input type="text" class="qty-input" value="${el.qty}" />
              <button class="qty-increase-btn">+</button>
            </div>

            <div class="item-price">
              <p class="price">₹${Number(el.price).toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        <div class="item-total">
          <p class="item-total-para"></p>
        </div>
      </div>

      <div class="bottom-line-item-container">
        <div class="item-img">
          <img src="${el.itemImg}" class="product-img" />
        </div>

        <div class="item-actions">
          <div class="remove-btn">❌ Remove</div>
        </div>
      </div>
    `;

    productAddedCartContainer.append(cartItemsContentDiv);

    /* =========================
       PER ITEM LOGIC
    ========================= */

    let qtyInput = cartItemsContentDiv.querySelector(".qty-input");
    let incBtn = cartItemsContentDiv.querySelector(".qty-increase-btn");
    let decBtn = cartItemsContentDiv.querySelector(".qty-decrease-btn");
    let itemTotalPara = cartItemsContentDiv.querySelector(".item-total-para");
    let removeBtn = cartItemsContentDiv.querySelector(".remove-btn");

    const updateItemTotal = () => {
      let total = el.price * el.qty;

      itemTotalPara.innerText =
        "₹" +
        total.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        });

      cartItemsListStorage[index].qty = el.qty;
      localStorage.setItem(
        "cartItemsData",
        JSON.stringify(cartItemsListStorage)
      );

      updateCartSummary();
    };

    incBtn.addEventListener("click", () => {
      if (el.qty >= 10) return;
      el.qty++;
      qtyInput.value = el.qty;
      updateItemTotal();
    });

    decBtn.addEventListener("click", () => {
      if (el.qty <= 1) return;
      el.qty--;
      qtyInput.value = el.qty;
      updateItemTotal();
    });

    removeBtn.addEventListener("click", () => {
      cartItemsListStorage.splice(index, 1);
      localStorage.setItem(
        "cartItemsData",
        JSON.stringify(cartItemsListStorage)
      );
      apendCartItems();
      updateCartSummary();
    });

    updateItemTotal();
  });
};

/* =========================
   CART SUMMARY
========================= */

const updateCartSummary = () => {
  let total = 0;

  cartItemsListStorage.forEach((el) => {
    total += el.price * (el.qty || 1);
  });

  let shipping = (total * 2.5) / 100;
  let tax = (total * 28) / 100;
  let orderTotal = total + shipping + tax;

  let cartSummary = document.querySelector(".cart-order-summary-box");

  cartSummary.innerHTML = `
    <div class="order-summary-heading">
      <h3>Cart Summary</h3>
    </div>

    <div class="order-summary">
      <p>Total Item Price: ₹${total.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}</p>
      <p>Shipping: ₹${shipping.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}</p>
      <p>Tax: ₹${tax.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}</p>
    </div>

    <div class="order-total">
      <strong>Order Total: ₹${orderTotal.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}</strong>
    </div>
  `;
};

/* =========================
   INIT
========================= */

window.onload = () => {
  apendCartItems();
  updateCartSummary();
};




















// apendCartItems();

// Increase or Decrease product quantity
// let qtyInput = document.querySelector(".qty-input");
// console.log("🚀 ~ qtyInput:", qtyInput);
// let increaseBtn = document.querySelector(".qty-increase-btn");
// let decreaseBtn = document.querySelector(".qty-decrease-btn");
// qtyInput.value = 1;

// qtyInput.addEventListener("change", (e) => {
//   if (e.target.value > 10) {
//     alert("Oops! You can add up to 10 products only 😊");
//     e.target.value = 1;
//     return;
//   }
//   else if(e.target.value < 0){
//     alert("Oops! Quantity can’t be less than 1. Please add at least one item 🙂");
//     e.target.value = 1;
//     return
//   }
//   handleAmount(e.target.value);
// });

// const increaseItem = () => {
//   qtyInput.value = Number(qtyInput.value) + 1;
//   decreaseBtn.disabled = false;
//   if (Number(qtyInput.value) >= 10) {
//     increaseBtn.disabled = true;
//   }
//   handleAmount();
// };
// const decreaseItem = () => {
//   if (Number(qtyInput.value) <= 0) {
//     decreaseBtn.disabled = true;
//     return;
//   }
//   qtyInput.value = Number(qtyInput.value) - 1;

//   if (Number(qtyInput.value) === 0) {
//     decreaseBtn.disabled = true;
//   }
//   if (Number(qtyInput.value) < 10) {
//     increaseBtn.disabled = false;
//   }
//   handleAmount();
// };

// increaseBtn.addEventListener("click", increaseItem);
// decreaseBtn.addEventListener("click", decreaseItem);

// const handleAmount = () => {
  // let itemPricePara = document.querySelector(".item-total-para");
  // let itemRate = document.querySelector(".price");
  // let itemQty = Number(qtyInput.value);
  // let itemPrice = Number(productDataStorage.price);
  // itemRate.innerText =
  //   "₹" +
  //   itemPrice.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });
  // let totalItemPrice = Number(itemQty) * Number(itemPrice);

  // itemPricePara.innerText =
  //   "₹" +
  //   totalItemPrice.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });

  // // Cart summary
  // let totalItemAmt =
  //   "₹" +
  //   totalItemPrice.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });

  // let shippingValue = (totalItemPrice * 2.5) / 100;
  // let shipping =
  //   "₹" +
  //   shippingValue.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });

  // let taxValue = (totalItemPrice * 28) / 100;
  // let tax =
  //   "₹" +
  //   taxValue.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });

  // let totalOrderAmt = totalItemPrice + shippingValue + taxValue;
  // let totalOrder =
  //   "₹" +
  //   totalOrderAmt.toLocaleString("en-IN", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });

  // <p name="amount">${totalItemAmt}</p>

  // let cardOrderSummaryBox = document.querySelector(".cart-order-summary-box");
  // cardOrderSummaryBox.innerHTML = `
  //   <div class="order-summary-heading">
  //       <i class="bi bi-bag-dash"></i>
  //       <h3 class="order-summary-title">Cart Summary</h3>
  //   </div>
  //   <div class="order-summary">
  //       <div class="item-price summary-box">
  //           <p>Total Item Price :</p>
  //           <p name="amount">200</p>
  //       </div>
  //       <div class="shipping-details summary-box">
  //           <p>Shipping :</p>
  //           <p name="amount">300</p>
  //       </div>
  //       <div class="tax-details summary-box">
  //           <p>Tax :</p>
  //           <p name="amount">500</p>
  //       </div>
  //   </div>
  //   <div class="order-total">
  //       <p name="total-amount">Order Total:</p>
  //       <p name="total-amt">1200</p>
  //   </div>
  //   <div class="promocode-div">
  //       <p>Promo Code</p>
  //       <p>+</p>
  //   </div>
  //   <div class="checkout-btn">
  //       <div class="term-condition">
  //           <p>By checking out, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
  //       </div>
  //       <button>CHECKOUT NOW</button>
  //   </div>
  //   <div class="payment-method">
  //       <div class="phone-pay box">
  //           <p>PhonePay</p>
  //       </div>
  //       <div class="paytm box">
  //           <p>Paytm</p>
  //       </div>
  //   </div>
  // `;
// };
// handleAmount()

// window.onload = () => {
//   handleAmount();
// };
