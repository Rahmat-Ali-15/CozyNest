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
