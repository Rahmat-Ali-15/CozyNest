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
};
window.onload = decreaseItem;
