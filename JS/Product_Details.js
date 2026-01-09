import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();


let cartApi = `https://api-server-zecj.onrender.com/product_cart`;
let productDataStorage =
  JSON.parse(localStorage.getItem("selectedProduct")) || {};
console.log("🚀 ~ productDataStorage:", productDataStorage);

let api = "https://api-server-zecj.onrender.com/Modern-Furniture";

let loading = document.querySelector(".loading");
const fetchCartApi = async () => {
  // Show loading message before fetch
  loading.style.display = "block";

  try {
    let res = await fetch(api);
    let cartData = await res.json();

    let main = cartData.Furniture.main_product;

    // convert ALL categories into ONE array
    let allProducts = [
      ...Object.values(main.lounge).flat(),
      ...Object.values(main.axis).flat(),
      ...Object.values(main.retreat).flat(),
      ...Object.values(main.unwind).flat(),
      ...Object.values(main.walnut_storage).flat(),
      ...Object.values(main.walnut_bookshelf).flat(),
      ...Object.values(main.bisou_chair).flat(),
      ...Object.values(main.keane).flat(),
    ];

    let matchedProduct = allProducts.find(
      (el) => el.id === productDataStorage.id
    );

    if (!matchedProduct) {
      console.error("❌ Product not found");
      return;
    }

    renderProductDetails(matchedProduct);

    console.log("✅ matchedProduct:", matchedProduct);
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};
fetchCartApi();

const renderProductDetails = (val) => {
  console.log("🚀 ~ val initial:", val);

  let thumbnailContainer = document.querySelector(".left-thumbnail-container");
  let galleryImgContainer = document.querySelector(".gallery-img-container");

  thumbnailContainer.innerHTML = "";
  galleryImgContainer.innerHTML = "";
  let galleryImg;

  // Gallery img

  let galleryImgDiv = document.createElement("div");
  galleryImgDiv.className = "gallery-img-div";

  galleryImg = document.createElement("img");
  galleryImg.src = productDataStorage.selectedImg;

  galleryImgDiv.append(galleryImg);
  galleryImgContainer.append(galleryImgDiv);

  // thumbnail img
  val.thumbnail_img &&
    val.thumbnail_img.forEach((el) => {
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
  price.innerText =
    "₹ " +
    Number(val.price).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  let productName = document.querySelector(".product-name");
  productName.innerText = val.caption;

  // Product Qty counter
  let increaseBtn = document.querySelector(".increase-qty");
  let decreaseBtn = document.querySelector(".decrease-qty");
  let productQtyInput = document.querySelector(".product-qty-input");

  productQtyInput.value = 1;
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

  increaseBtn.onclick = null;
  decreaseBtn.onclick = null;

  increaseBtn.addEventListener("click", increaseQty);
  decreaseBtn.addEventListener("click", decreaseQty);

  const handleAmount = () => {
    let pricePara = document.querySelector(".price-para");
    let initialPrice = val.price;
    let totalPrice = initialPrice * Number(productQtyInput.value);

    pricePara.innerText =
      "₹ " +
      totalPrice.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  };

  handleAmount();

  let addToCartBtn = document.querySelector(".add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", async (id) => {
      let qty = Number(productQtyInput.value);
      let totalPrice = Number(val.price) * qty;
      let cartDataObj = {
        id: productDataStorage.id,
        caption: val.caption,
        itemPrice: Number(val.price),
        totalPrice: totalPrice,
        selectedImg: productDataStorage.selectedImg,
        productQty: qty,
      };
      try {
        // Show loading message before fetch
        loading.style.display = "block";

        // Checking if item is already added in cart then don't add duplicate item
        let cartRes = await fetch(cartApi);
        let cartItems = await cartRes.json();

        let alreadyAdded = cartItems.find((item) => item.id === id);

        if (alreadyAdded) {
          alert("⚠️ Product already added to cart");
          return;
        }

        let res = await fetch(cartApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartDataObj),
        });
        let data = await res.json();
        console.log("✅ Added to cart:", data);
        alert("✅ Product added to cart");
      } catch (error) {
        console.log(error);
      } finally {
        loading.style.display = "none";
      }
      window.location = "../HTML/Cart.html";
    });
  }
};