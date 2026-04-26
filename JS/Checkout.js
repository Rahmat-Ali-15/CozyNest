let shippingDetails = document.querySelector(".checkout-form");
let shippingNextBtn = document.querySelector(".shipping-next-btn");
let paymentDetails = document.querySelector(".payment-method-container");
let firstSpan = document.querySelector(".first-span");
let secondSpan = document.querySelector(".second-span");

shippingNextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  shippingDetails.style.display = "none";
  paymentDetails.style.display = "flex";
  firstSpan.style.border = "2px solid black";
  document.querySelector(".box-2").style.backgroundColor = "black";
  document.querySelector(".box-2").style.color = "white";
});

let backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", () => {
  paymentDetails.style.display = "none";
  shippingDetails.style.display = "flex";
  firstSpan.style.border = "1px solid rgba(190, 187, 187,0.5)";
  document.querySelector(".box-2").style.backgroundColor = "white";
  document.querySelector(".box-2").style.color = "black";
});

let cartApi = `https://api-server-zecj.onrender.com/product_cart`;

const fetchCartItem = async () => {
  try {
    let res = await fetch(cartApi);
    let cartItemData = await res.json();
    appendShippingOrder(cartItemData);
    console.log("🚀 ~ cartItemData:", cartItemData);
  } catch (error) {
    console.log(error);
  }
};
fetchCartItem();

let totalProductAmt;
const appendShippingOrder = (value) => {
  let shippingOrderSummary = document.querySelector(".shipping-right");
  totalProductAmt = 0;

  value.forEach((el) => {
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

    shippingOrderSummary.innerHTML = `
        <div class="shipping-order-summary">
            <div class="order-heading">
                <p>Order Summary</p>
                <a href="../HTML/Cart.html">Edit cart</a>
            </div>
            <div>
                <p>Merchandise: </p>
                <p>${totalProduct}</p>
            </div>
            <div>
                <p>Shipping:</p>
                <p>${shippingCharge}</p>
            </div>
            <div>
                <p>Tax:</p>
                <p>${tax}</p>
            </div>
            <div class="order-total">
                <p>Order Total</p>
                <p>${cartTotal}</p>
            </div>
        </div>
  `;
  });
};
