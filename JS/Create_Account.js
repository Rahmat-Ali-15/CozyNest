// Getting the user-details form the localstorege
// let api_user = "https://api-server-zecj.onrender.com/user";

let userDataStorage = JSON.parse(localStorage.getItem("userDetails")) || [];

const myValidation = async (event) => {
  event.preventDefault();

  let fName = document.querySelector("#firstname").value;
  let lName = document.querySelector("#lastname").value;
  let pNum = document.querySelector("#p_number").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;

  // All fields are required
  if (
    fName.trim() === "" ||
    lName.trim() === "" ||
    pNum.trim() === "" ||
    email.trim() === "" ||
    pass.trim() === ""
  ) {
    alert("All fields are required");
    return false;
  }

  // Removing previous error messages
  document.querySelector(".email-error").innerText = "";
  document.querySelector(".pass-error").innerText = "";
  document.querySelector(".num-error").innerText = "";

  // First Name validation
  if (!/^[A-Za-z]+$/.test(fName)) {
    document.querySelector(".fname-error").innerText =
      "Only alphabets are allowed!";
    return false;
  } else {
    document.querySelector(".fname-error").innerText = "";
  }

  // Last name validation
  if (!/^[A-Za-z]+$/.test(lName)) {
    document.querySelector(".lname-error").innerText =
      "Only alphabets are allowed!";
    return false;
  } else {
    document.querySelector(".lname-error").innerText = "";
  }

  // Phone number validation
  if (isNaN(pNum)) {
    document.querySelector(".num-error").innerText = "Only numbers are allowed";
    return false;
  } else if (pNum.length < 10 || pNum.length > 10) {
    document.querySelector(".num-error").innerText =
      "Number should be of 10 digits!";
    return false;
  }

  // Email validation
  if (
    email.charAt(email.length - 4) === "." ||
    email.charAt(email.length - 3) === "."
  ) {
    document.querySelector(".email-error").innerText = "";
  } else {
    document.querySelector(".email-error").innerText = `Invalid "." position`;
    return false;
  }

  // Password validation
  if (pass.length < 8 || pass.length > 20) {
    document.querySelector(".pass-error").innerText =
      "Password must lies between 8 to 20 charector";
    return false;
  } else {
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecialChar = /[!@#$%^&*()|\/;:<>?]/.test(pass);

    if (!hasUpperCase) {
      document.querySelector(".pass-error").innerText =
        "Password must include at least one uppercase letter!";
      return false;
    } else if (!hasLowerCase) {
      document.querySelector(".pass-error").innerText =
        "Password must include at least one lowercase letter!";
      return false;
    } else if (!hasNumber) {
      document.querySelector(".pass-error").innerText =
        "Password must include at least one number!";
      return false;
    } else if (!hasSpecialChar) {
      document.querySelector(".pass-error").innerText =
        "Password must include at least one special letter!";
      return false;
    }
  }

  // User details
  let userData = {
    id: Date.now(),
    fName,
    lName,
    email,
    pass,
  };

  // Check if email already exists
  let checkEmail = userDataStorage.find((u) => u.email === email);

  if (checkEmail) {
    document.querySelector(".email-error").innerText =
      "This email is already registered ❌";
    return;
  }
  userDataStorage.push(userData);

  localStorage.setItem("userDetails", JSON.stringify(userDataStorage));

  // try {

  //   // Checking if the email is already exists
  //   let checkEmail = await fetch (`${api_user}?email=${email}`);
  //   let existingUser = await checkEmail.json();

  //   if(existingUser.length>0){
  //     document.querySelector(".email-error").innerText = "This email is already registered ❌‼️";
  //     return false;
  //   }

  //   let res = await fetch(api_user, {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(userData)
  //   });
  //   let val = await res.json();
  //   console.log("🚀 ~ val:", val);
  // } catch (error) {
  //   console.log(error)
  // }

  // Show success popup
  document
    .querySelector(".success-msg-popup")
    .classList.add("active-success-msg");
  document.querySelector(".signUp-form").classList.add("signUp-form-disable");
  document.querySelector("header").classList.add("header-disable");
  document.querySelector("footer").classList.add("footer-disable");

  // Clear the form inputs
  document.querySelector(".signUp-form").reset();
};

// Go to Login/SignIn page
let loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
  window.location = "../HTML/SignIn_Page.html";
});

let continueBtn = document.querySelector(".continue-btn");
continueBtn.addEventListener("click", () => {
  window.location = "../HTML/SignIn_Page.html";
});

// Back to SignUp page
let backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", () => {
  window.location = "../HTML/Create_Account.html";
});


const form = document.querySelector(".signUp-form");

form.addEventListener("submit", (event) => {
  myValidation(event);
});