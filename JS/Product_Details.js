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

import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

const fetchApi = async () => {
  let api = "https://api-server-zecj.onrender.com/Modern-Furniture";

  let loading = document.querySelector(".loading");

  try {
    loading.style.display = "block";
    let res = await fetch(api);
    let data = await res.json();

    renderThumbnail(data.Furniture.main_product.lounge[0].thumbnail_img);
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};

fetchApi();

const renderThumbnail = (val) => {
  let thumbnailContainer = document.querySelector(".left-thumbnail-container");
  let galleryImgContainer = document.querySelector(".gallery-img-container");

  thumbnailContainer.innerHTML = "";
  galleryImgContainer.innerHTML = "";

  // FIRST LOOP → thumbnails
  val.map((el, index) => {
    let thumbImgDiv = document.createElement("div");
    thumbImgDiv.className = "thumb-img-div";

    let img = document.createElement("img");
    img.src = el.img;

    if (index === 0) {
      if (index === 0) {
        thumbImgDiv.classList.add("active");
      }
    }

    thumbImgDiv.append(img);
    thumbnailContainer.append(thumbImgDiv);

    // click logic yahin attach
    thumbImgDiv.addEventListener("click", () => {
      let allGalleryImgs =
        galleryImgContainer.querySelectorAll(".gallery-img-div");

      document.querySelectorAll(".thumb-img-div").forEach((div) => {
        div.classList.remove("active");
      });

      thumbImgDiv.classList.add("active");

      allGalleryImgs.forEach((div, i) => {
        div.style.display = i === index ? "inline-block" : "none";
      });
    });
  });

  // SECOND LOOP → gallery images
  val.map((el, index) => {
    let galleryImgDiv = document.createElement("div");
    galleryImgDiv.className = "gallery-img-div";

    let img = document.createElement("img");
    img.src = el.img;

    let caption = document.createElement("p");

    // only first image visible initially
    galleryImgDiv.style.display = index === 0 ? "block" : "none";

    galleryImgDiv.append(img);
    galleryImgContainer.append(galleryImgDiv);
  });
};

// Product Qty counter
let increaseBtn = document.querySelector(".increase-qty");
let decreaseBtn = document.querySelector(".decrease-qty");
let productQtyInput = document.querySelector(".product-qty-input");

productQtyInput.value = 0;
decreaseBtn.disabled = true;

const increaseQty = () => {
  productQtyInput.value = Number(productQtyInput.value) + 1;
  decreaseBtn.disabled = false;
  if (Number(productQtyInput.value) >= 10) {
    increaseBtn.disabled = true;
  }
};
const decreaseQty = () => {
  if (Number(productQtyInput.value) <= 0) {
    decreaseBtn.disabled = true;
    return;
  }
  productQtyInput.value = Number(productQtyInput.value) - 1;
  if (Number(productQtyInput.value) === 0) {
    decreaseBtn.disabled = true;
  }
  if (Number(productQtyInput.value) < 10) {
    increaseBtn.disabled = false;
  }
};

increaseBtn.addEventListener("click", increaseQty);
decreaseBtn.addEventListener("click", decreaseQty);
