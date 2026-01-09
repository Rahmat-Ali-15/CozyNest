import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

let cartApi = `https://api-server-zecj.onrender.com/product_cart`;

const fetchCartItem = async () => {
  try {
    let res = await fetch(cartApi);
    let cartItemData = await res.json();
    apendCartItems(cartItemData);
    renderCartSummary(cartItemData);
    console.log("🚀 ~ cartItemData:", cartItemData);
  } catch (error) {
    console.log(error);
  }
};
fetchCartItem();

let cardOrderSummaryBox = document.querySelector(".cart-order-summary-box");
let emptyCartMsg = document.querySelector(".empty-cart-msg")

const apendCartItems = (data) => {
  let productAddedCartContainer = document.querySelector(
    ".product-added-cart-container"
  );
  productAddedCartContainer.innerHTML = "";

  let giftCardContainer = document.querySelector(".gift-card-container");

  totalItemsInCart.innerText = data.length;

  data.length === 0 ? giftCardContainer.style.display= "flex" : giftCardContainer.style.display= "none";
  data.length === 0 ? emptyCartMsg.style.display= "flex" : emptyCartMsg.style.display= "none";
  data.length === 0 ? cardOrderSummaryBox.style.display= "none" : cardOrderSummaryBox.style.display= "flex";

  // Empty cart check
  if (data.length === 0) {
    productAddedCartContainer.innerHTML = `
      <h2 style="text-align:center;margin-top:40px;">
        🛒 No item is present
      </h2>
    `;
    return;
  }

  data.forEach((el) => {
    let cartItemsContentDiv = document.createElement("div");
    cartItemsContentDiv.className = "cart-items-content-div";

    let itemPrice =
      "₹ " +
      el.itemPrice.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    let totalPrice =
      "₹ " +
      el.totalPrice.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    cartItemsContentDiv.innerHTML = `

          <div class="top-line-item-container">
              <div class="items-details">
                  <h2 class="item-title">${el.caption}</h2>
              </div>
              <div class="items-shop-bar">
                  <div class="price-qty">
                      <div class="item-qty">
                          <button class="qty-decrease-btn">-</button>
                          <input type="text" name="itme-qty" class="qty-input">
                          <button class="qty-increase-btn">+</button>
                      </div>
                      <div class="item-price">
                          <p class="price">${itemPrice}</p>
                      </div>
                  </div>
              </div>
              <div class="item-total">
                  <p class="item-total-para">${totalPrice}</p>
              </div>
          </div>
          <div class="bottom-line-item-container">
              <div class="item-img">
                  <img src=${el.selectedImg} alt="item img" class="product-img">
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

    let qtyInput = cartItemsContentDiv.querySelector(".qty-input");
    qtyInput.value = el.productQty;
    console.log("🚀 ~ qtyInput:", qtyInput.value);

    let increaseBtn = cartItemsContentDiv.querySelector(".qty-increase-btn");
    let decreaseBtn = cartItemsContentDiv.querySelector(".qty-decrease-btn");

    // Increase button logic
    const increaseItem = async () => {
      qtyInput.value = Number(qtyInput.value) + 1;

      decreaseBtn.disabled = false;
      if (Number(qtyInput.value) >= 10) {
        increaseBtn.disabled = true;
      }
      handleAmount();
      renderCartSummary();
    };

    // Decrease button logic
    const decreaseItem = async () => {
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
      renderCartSummary();
    };

    const handleAmount = async () => {
      let updatedQty = Number(qtyInput.value);
      let updatedTotal = updatedQty * Number(el.itemPrice);
      let updatedTotalPrice =
        cartItemsContentDiv.querySelector(".item-total-para");
      updatedTotalPrice.innerText =
        "₹ " +
        updatedTotal.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

      try {
        let res = await fetch(`${cartApi}/${el.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productQty: updatedQty,
            totalPrice: updatedTotal,
          }),
        });
        fetchCartItem();
      } catch (error) {
        console.log(error);
      }
    };

    increaseBtn.addEventListener("click", increaseItem);
    decreaseBtn.addEventListener("click", decreaseItem);

    // Remove product from cart logic
    let removeItemBtn = cartItemsContentDiv.querySelector(".remove");
    if (removeItemBtn) {
      removeItemBtn.addEventListener("click", async () => {
        try {
          let res = await fetch(`${cartApi}/${el.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          fetchCartItem();
        } catch (error) {
          console.log(error);
        }
      });
    }

    productAddedCartContainer.append(cartItemsContentDiv);
  });
};


let totalItemsInCart = document.querySelector(".total-items-in-cart");
let totalProductAmt;


const renderCartSummary = (apiData) => {
  console.log("🚀 ~ apiData:", apiData);
  // let cardOrderSummaryBox = document.querySelector(".cart-order-summary-box");
  totalProductAmt = 0;

  apiData &&
    apiData.forEach((el) => {
      totalProductAmt += el.totalPrice;

      let totalProduct =
        "₹ " +
        totalProductAmt.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

      let shippingValue = Number(totalProductAmt * 2.5) / 100;
      let shippingCharge =
        "₹ " +
        shippingValue.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

      let taxValue = Number(totalProductAmt * 18) / 100;
      let tax =
        "₹ " +
        taxValue.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

      let cartTotalAmt = Number(totalProductAmt) + shippingValue + taxValue;

      let cartTotal =
        "₹ " +
        cartTotalAmt.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

      cardOrderSummaryBox.innerHTML = `
    <div class="order-summary-heading">
        <i class="bi bi-bag-dash"></i>
        <h3 class="order-summary-title">Cart Summary</h3>
    </div>
    <div class="order-summary">
        <div class="item-price summary-box">
            <p>Total Item Price :</p>
            <p name="amount" class = "total-product-amt">${totalProduct}</p>
        </div>
        <div class="shipping-details summary-box">
            <p>Shipping :</p>
            <p name="amount">${shippingCharge}</p>
        </div>
        <div class="tax-details summary-box">
            <p>Tax :</p>
            <p name="amount">${tax}</p>
        </div>
    </div>
    <div class="order-total">
        <p name="total-amount">Order Total:</p>
        <p name="total-amt" class="cartTotal-amt">${cartTotal}</p>
    </div>
    <div class="promocode-div">
        <div class="promocode-content">
            <p>Promo Code</p>
            <p>+</p>
        </div>
        <div class="promocode-details">
          <div class="promocode-inputBtn">
            <input type="text" class="promocode-input" placeholder="Enter promo code" />
            <button class="promocode-btn">Add</button>
          </div>
            <p class="promocode-message">Apply: FLAT30%</p>
            <p class="discount-message"></p>
        </div>
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

      let promocodeDiv = cardOrderSummaryBox.querySelector(".promocode-content");
      let promocodeDetails = cardOrderSummaryBox.querySelector(".promocode-details")
      let promocodeInput = cardOrderSummaryBox.querySelector(".promocode-input");
      let promocodeBtn = cardOrderSummaryBox.querySelector(".promocode-btn");
      let cartTotalAfterDiscount = cardOrderSummaryBox.querySelector(".cartTotal-amt");
      let discountMsg = cardOrderSummaryBox.querySelector(".discount-message");

      promocodeDiv.addEventListener("click", () => {
        promocodeDetails.classList.toggle("promocode-details")
      })

      promocodeBtn.addEventListener("click", () => {
        if (promocodeInput.value === "FLAT30%") {
          let discountAmt = (cartTotalAmt * 30) / 100;
          cartTotalAmt = cartTotalAmt - discountAmt;
          cartTotalAfterDiscount.innerText =
            "₹ " +
            cartTotalAmt.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });

            document.querySelector(".promocode-message").innerText = ""
          // show discount message
          discountMsg.innerText = `🥳 Hurrah! You just saved ₹ ${discountAmt} on this order!`;

          promocodeInput.value = "";
        } else {
          alert("❌ Invalid Promo Code");
          promocodeInput.value = "";
        }
      });
    });
};
