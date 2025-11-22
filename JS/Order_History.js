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
