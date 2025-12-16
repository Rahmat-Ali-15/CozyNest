import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

// Increase or Decrease product quantity
let itemInput = document.querySelector(".qty-input");
let increaseBtn = document.querySelector(".qty-increase-btn");
let decreaseBtn = document.querySelector(".qty-decrease-btn");

itemInput.value = 0;

const increaseItem = () => {
  itemInput.value = Number(itemInput.value) + 1;
  decreaseBtn.disabled = false;
  if (Number(itemInput.value) >= 10) {
    increaseBtn.disabled = true;
  }
  handleAmount();
};
const decreaseItem = () => {
  if (Number(itemInput.value) <= 0) {
    decreaseBtn.disabled = true;
    return;
  }
  itemInput.value = Number(itemInput.value) - 1;

  if (Number(itemInput.value) === 0) {
    decreaseBtn.disabled = true;
  }
  if (Number(itemInput.value) < 10) {
    increaseBtn.disabled = false;
  }
  handleAmount();
};

increaseBtn.addEventListener("click", increaseItem);
decreaseBtn.addEventListener("click", decreaseItem);

const handleAmount = () => {
  let itemPricePara = document.querySelector(".item-total-para");
  let itemRate = document.querySelector(".price");
  let itemQty = itemInput.value;
  let itemPrice = 1100;
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
