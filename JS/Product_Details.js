import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

let productDataStorage = JSON.parse(localStorage.getItem("product_page_data")) || [];
console.log("🚀 ~ productDataStorage:", productDataStorage);

const renderProductDetails = (val) => {
  let thumbnailContainer = document.querySelector(".left-thumbnail-container");
  let galleryImgContainer = document.querySelector(".gallery-img-container");

  thumbnailContainer.innerHTML = "";
  galleryImgContainer.innerHTML = "";
  let galleryImg;

  // Gallery img
  if (productDataStorage.selectedImage) {
    let galleryImgDiv = document.createElement("div");
    galleryImgDiv.className = "gallery-img-div";

    galleryImg = document.createElement("img");
    galleryImg.src = productDataStorage.selectedImage;

    galleryImgDiv.append(galleryImg);
    galleryImgContainer.append(galleryImgDiv);
  }

  // thumbnail img
  productDataStorage.thumb_img &&
    productDataStorage.thumb_img.forEach((el) => {
      let thumbImgDiv = document.createElement("div");
      thumbImgDiv.className = "thumb-img-div";

      let img = document.createElement("img");
      img.src = el.img;

      img.addEventListener("click", () => {
        galleryImg.src = img.src;
      });

      thumbImgDiv.append(img);
      thumbnailContainer.append(thumbImgDiv);
    });

  let price = document.querySelector(".product-price");
  price.innerText = productDataStorage.price.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let productName = document.querySelector(".product-name");
  productName.innerText = productDataStorage.caption;
};

// Product Qty counter
let increaseBtn = document.querySelector(".increase-qty");
let decreaseBtn = document.querySelector(".decrease-qty");
let productQtyInput = document.querySelector(".product-qty-input");

productQtyInput.value = 1;
// decreaseBtn.disabled = true;

const increaseQty = () => {
  productQtyInput.value = Number(productQtyInput.value) + 1;
  decreaseBtn.disabled = false;
  if (Number(productQtyInput.value) >= 10) {
    increaseBtn.disabled = true;
  }
  handleAmount();
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
  handleAmount();
};

increaseBtn.addEventListener("click", increaseQty);
decreaseBtn.addEventListener("click", decreaseQty);

const handleAmount = () => {
  let pricePara = document.querySelector(".price-para");
  let qty = productQtyInput.value;
  let price = productDataStorage.price;
  let totalPrice = Number(qty) * Number(price);

  pricePara.innerText =
    "₹ " +
    totalPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
};

let cartItemsListStorage = JSON.parse(localStorage.getItem("cartItemsData")) || []

const addToCart = () => {
    let cartItems = {
      title: productDataStorage.caption,
      price: productDataStorage.price,
      itemImg: productDataStorage.selectedImage
    }
    cartItemsListStorage.push(cartItems);
    localStorage.setItem("cartItemsData", JSON.stringify(cartItemsListStorage));
    
    // console.log("🚀 ~ cartItemsListStorage:", cartItemsListStorage);

}


window.onload = () => {
  handleAmount();
  renderProductDetails();
  let addToCartBtn = document.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click",()=> {
    addToCart();
    window.location = "../HTML/Cart.html"
  });
};
