const defaultEmail = "rahmat786@gmail.com"
const defaultPass = "rahmat@786"

const signUpForm = (e) => {
  e.preventDefault();

  let signUpEmail = document.querySelector("#email").value;
  let signUpPass = document.querySelector("#password").value;

  if (signUpEmail.trim() === "" || signUpPass.trim() === "") {
    alert("All fields are required!!!");
    return false;
  }

  if ((signUpEmail === defaultEmail) && (signUpPass === defaultPass)) {
    alert("Login Successfull!!!");
  }
  else{
    alert("Invalid email or Password !!!")
  }
};

let createAccBtn = document.querySelector(".create-account-btn");

createAccBtn.addEventListener("click", ()=> {
    window.location = "../HTML/Create_Account.html"
});