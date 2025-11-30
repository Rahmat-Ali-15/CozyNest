// Focusing on the input when the search icon is clicked
let searchInput = document.querySelector(".search-input");
let searchIcon = document.querySelector(".fa-magnifying-glass");
searchIcon.addEventListener("click", () => {
  searchInput.focus();
});

// Placeholder text come one-by-one(Placeholder Typing animation)
const text = "What can we help you find?";
let index = 0;

function typePlaceholder() {
  if (index < text.length) {
    searchInput.placeholder += text.charAt(index);
    index++;
    setTimeout(typePlaceholder, 150);
  } else {
    // When all text is done typing, wait and restart
    setTimeout(() => {
      searchInput.placeholder = ""; // clear placeholder
      index = 0; // reset index
      typePlaceholder(); // start again
    }, 1500); // pause before restarting
  }
}

typePlaceholder();

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

const fetchApi = async () => {
  let api = "https://api-server-zecj.onrender.com/Modern-Furniture";
  let loading = document.querySelector(".loading");

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

    // All use same function
    renderFurniture(lounge);
    renderFurniture(axis);
    renderFurniture(retreat);
    renderFurniture(unwind);

  } catch (error) {
    console.log("🚀 ~ error:", error);
  } finally {
    loading.style.display = "none";
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
    let bigImages = el.img.map((img) => `<img src="${img}" alt="img">`).join("");
    let colorBars = el.colorBar
      .map((c) => `<div class="colorbar-box"><img src="${c}" alt="color"></div>`)
      .join("");

    productCardContent.innerHTML = `
      <ul>
          <li class="product-card">
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
    `;

    productCardContainer.append(productCardContent);

    // Select images
    let bigImgs = productCardContent.querySelectorAll(".product-img img");
    let smallImgs = productCardContent.querySelectorAll(".colorbar-box img");

    // Default: show only first big image
    bigImgs.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
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
let filterType = document.querySelector(".filter-type");
let filterTypeDrop = document.querySelector(".type-dropdown-content");

filterType.addEventListener("click", () => {
  filterTypeDrop.classList.toggle("type-dropdown");

  // If dropdown is open → show UP icon
  if (filterTypeDrop.classList.contains("type-dropdown")) {
    document.querySelector(".bi-chevron-down").style.display = "none";
    document.querySelector(".bi-chevron-up").style.display = "inline-block";
  }
  // If dropdown is closed → show DOWN icon
  else {
    document.querySelector(".bi-chevron-down").style.display = "inline-block";
    document.querySelector(".bi-chevron-up").style.display = "none";
  }
});

const hideFunction = () => {
  document.querySelector(".bi-chevron-down").style.display = "none";
  document.querySelector(".bi-chevron-up").style.display = "none";
};

let filterCategory = document.querySelector(".filter-category");
let filterCategoryDrop = document.querySelector(".category-dropdown-content");

filterCategory.addEventListener("click", () => {
  filterCategoryDrop.classList.toggle("category-dropdown");

  if (filterCategoryDrop.classList.contains("category-dropdown")) {
    hideFunction();
    document.querySelector(".bi-chevron-down").style.display = "none";
    document.querySelector(".bi-chevron-up").style.display = "inline-block";
  }
  // If dropdown is closed → show DOWN icon
  else {
    document.querySelector(".bi-chevron-down").style.display = "inline-block";
    document.querySelector(".bi-chevron-up").style.display = "none";
  }
});

window.onload = () => {
  fetchApi();
};
