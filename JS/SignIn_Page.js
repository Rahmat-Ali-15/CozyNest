let api_user = "https://api-server-zecj.onrender.com/user";

const signInForm = async (e) => {
  e.preventDefault();

  let signInEmail = document.querySelector("#email").value;
  let signInPass = document.querySelector("#password").value;

  if (signInEmail.trim() === "" || signInPass.trim() === "") {
    alert("All fields are required!!!");
    return false;
  }

  // Fetching the from the api(data base)
  try {
    let usersRes = await fetch(api_user);
    let users = await usersRes.json();

    // Here finding user with match email and password
    let user = users.find(
      (u) => u.email === signInEmail && u.pass === signInPass
    );
    if (user) {
      window.location = "/index.html";
      // document.querySelector("#user_lastName").innerText = user.lName;
    } else {
      alert("Invalid email or password ❌");
    }
  } catch (error) {
    console.log("Server Error", error);
    alert("Something went wrong! Please try again.");
  }

  document.querySelector(".signIn-form").reset();
};

let createAccBtn = document.querySelector(".create-account-btn");

createAccBtn.addEventListener("click", () => {
  window.location = "../HTML/Create_Account.html";
});
