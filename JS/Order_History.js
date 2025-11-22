// Focusing on the input when the search icon is clicked
let searchInput = document.querySelector(".search-input");
let searchIcon = document.querySelector(".fa-magnifying-glass");
searchIcon.addEventListener("click", ()=> {
  searchInput.focus();
})


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
            searchInput.placeholder = "";  // clear placeholder
            index = 0;               // reset index
            typePlaceholder();       // start again
        }, 1500); // pause before restarting
    }
}

typePlaceholder();

// Getting the data from the localstorage
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (loggedUser) {
  document.querySelector("#user_firstName").innerText = loggedUser.fName;
  document.querySelector(".user-fname").innerText = loggedUser.fName;
}

// Toggle sidebar lists
const toggleList = (parentBox) => {
  let boxList = parentBox.querySelector(".box-list");
  let plus = parentBox.querySelector(".plus");
  let minus = parentBox.querySelector(".minus");

  // Toggle visibility
  boxList.classList.toggle("toggle-boxList");

  // Toggle icons
  if (boxList.classList.contains("toggle-boxList")) {
    plus.style.display = "none";
    minus.style.display = "flex";
  } else {
    minus.style.display = "none";
    plus.style.display = "flex";
  }
};
