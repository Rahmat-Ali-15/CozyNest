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

const fetchApi = async () => {
  let api = "https://api-server-zecj.onrender.com/Modern-Furniture";

  try {
    let res = await fetch(api);
    let data = await res.json();
    appendFurnitureData(data.Furniture.largeVisNav)
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

const appendFurnitureData = (arr) => {
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

}

window.onload = () => {
  fetchApi();
}