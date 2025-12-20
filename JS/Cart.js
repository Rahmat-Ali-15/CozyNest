import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

let productDataStorage =
  JSON.parse(localStorage.getItem("product_page_data")) || [];
console.log("🚀 ~ productDataStorage:", productDataStorage);

let cartItemsListStorage =
  JSON.parse(localStorage.getItem("cartItemsData")) || [];
console.log("🚀 ~ cartItemsListStorage:", cartItemsListStorage);

let totalItemsInCart = document.querySelector(".total-items-in-cart");

const apendCartItems = () => {
  let productAddedCartContainer = document.querySelector(
    ".product-added-cart-container"
  );
  productAddedCartContainer.innerHTML = "";

   totalItemsInCart.innerText = cartItemsListStorage.length;

  // ✅ empty cart check
  if (cartItemsListStorage.length === 0) {
    productAddedCartContainer.innerHTML = `
      <h2 style="text-align:center;margin-top:40px;">
        🛒 No item is present
      </h2>
    `;
    handleAmount()
    return;
  }

  cartItemsListStorage.forEach((el) => {
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
                          <input type="text" name="itme-qty" class="qty-input">
                          <button class="qty-increase-btn">+</button>
                      </div>
                      <div class="item-price">
                          <p class="price">${el.price}</p>
                      </div>
                  </div>
              </div>
              <div class="item-total">
                  <p class="item-total-para"></p>
              </div>
          </div>
          <div class="bottom-line-item-container">
              <div class="item-img">
                  <img src=${el.itemImg} alt="item img" class="product-img">
              </div>
              <div class="product-availability">
                  <div class="ship-details">
                      <div>
                          <input type="radio" id="ship" name="delivery">
                          <label for="ship">Ship</label>
                      </div>
                      <p>In stock and ready for delivery to PIN Code 843113</p>
                      <p>Shipping: <a href="#">Local In-Home</a></p>
                      <p>Arrives: <a href="#">7–14 business days</a></p>
                      <div class="pin-code">
                          <i class="bi bi-geo-alt"></i>
                          <p>PIN Code: 843113</p>
                      </div>
                  </div>
                  <div class="warehouse-pickup">
                      <div>
                          <input type="radio" id="warehouse" name="delivery">
                          <label for="warehouse">Free Warehouse Pickup</label>
                      </div>
                      <p>Pay no delivery fee. <a href="#">Learn more</a></p>
                      <a href="#">Select Warehouse</a>
                  </div>
              </div>
              <div class="item-actions">
                  <div class="remove">
                      <i class="bi bi-x-lg"></i>
                      <p class ="remove-item-btn">Remove</p>
                  </div>
                  <div class="save-for-later">
                      <i class="bi bi-download"></i>
                      <p>Save for Later</p>
                  </div>
              </div>
          </div>
          <div class="gift-msg">
              <i class="bi bi-gift"></i>
              <span>If this order contains a gift, you will be able to add a gift message and gift box to eligible items during checkout. <a href="#">Learn More.</a></span>
          </div>
    `;

    let removeItemBtn = cartItemsContentDiv.querySelector(".remove");
    if (removeItemBtn) {
      removeItemBtn.addEventListener("click", () => {
        cartItemsListStorage = cartItemsListStorage.filter((item) => item.id != el.id);
        localStorage.setItem("cartItemsData", JSON.stringify(cartItemsListStorage));
        apendCartItems()
      });
    }

    productAddedCartContainer.append(cartItemsContentDiv);
  });
};
apendCartItems();

// Increase or Decrease product quantity
let qtyInput = document.querySelector(".qty-input");
let increaseBtn = document.querySelector(".qty-increase-btn");
let decreaseBtn = document.querySelector(".qty-decrease-btn");
qtyInput.value = 1;

qtyInput.addEventListener("change", (e) => {
  if (e.target.value > 10) {
    alert("Oops! You can add up to 10 products only 😊");
    e.target.value = 1;
    return;
  }
  else if(e.target.value < 0){
    alert("Oops! Quantity can’t be less than 1. Please add at least one item 🙂");
    e.target.value = 1;
    return
  }
  handleAmount(e.target.value);
});

const increaseItem = () => {
  qtyInput.value = Number(qtyInput.value) + 1;
  decreaseBtn.disabled = false;
  if (Number(qtyInput.value) >= 10) {
    increaseBtn.disabled = true;
  }
  handleAmount();
};
const decreaseItem = () => {
  if (Number(qtyInput.value) <= 0) {
    decreaseBtn.disabled = true;
    return;
  }
  qtyInput.value = Number(qtyInput.value) - 1;

  if (Number(qtyInput.value) === 0) {
    decreaseBtn.disabled = true;
  }
  if (Number(qtyInput.value) < 10) {
    increaseBtn.disabled = false;
  }
  handleAmount();
};

increaseBtn.addEventListener("click", increaseItem);
decreaseBtn.addEventListener("click", decreaseItem);

const handleAmount = () => {
  let itemPricePara = document.querySelector(".item-total-para");
  let itemRate = document.querySelector(".price");
  let itemQty = Number(qtyInput.value);
  let itemPrice = Number(productDataStorage.price);
  itemRate.innerText =
    "₹" +
    itemPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  let totalItemPrice = Number(itemQty) * Number(itemPrice);

  itemPricePara.innerText =
    "₹" +
    totalItemPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Cart summary
  let totalItemAmt =
    "₹" +
    totalItemPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  let shippingValue = (totalItemPrice * 2.5) / 100;
  let shipping =
    "₹" +
    shippingValue.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  let taxValue = (totalItemPrice * 28) / 100;
  let tax =
    "₹" +
    taxValue.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  let totalOrderAmt = totalItemPrice + shippingValue + taxValue;
  let totalOrder =
    "₹" +
    totalOrderAmt.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  let cardOrderSummaryBox = document.querySelector(".cart-order-summary-box");
  cardOrderSummaryBox.innerHTML = `
    <div class="order-summary-heading">
        <i class="bi bi-bag-dash"></i>
        <h3 class="order-summary-title">Cart Summary</h3>
    </div>
    <div class="order-summary">
        <div class="item-price summary-box">
            <p>Total Item Price :</p>
            <p name="amount">${totalItemAmt}</p>
        </div>
        <div class="shipping-details summary-box">
            <p>Shipping :</p>
            <p name="amount">${shipping}</p>
        </div>
        <div class="tax-details summary-box">
            <p>Tax :</p>
            <p name="amount">${tax}</p>
        </div>
    </div>
    <div class="order-total">
        <p name="total-amount">Order Total:</p>
        <p name="total-amt">${totalOrder}</p>
    </div>
    <div class="promocode-div">
        <p>Promo Code</p>
        <p>+</p>
    </div>
    <div class="checkout-btn">
        <div class="term-condition">
            <p>By checking out, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
        </div>
        <button>CHECKOUT NOW</button>
    </div>
    <div class="payment-method">
        <div class="phone-pay box">
            <p>PhonePay</p>
        </div>
        <div class="paytm box">
            <p>Paytm</p>
        </div>
    </div>
  `;
};

window.onload = () => {
  handleAmount();
};
