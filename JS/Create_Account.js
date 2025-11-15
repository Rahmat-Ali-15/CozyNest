const myValidation = (event) => {
  event.preventDefault();

  let fName = document.querySelector("#firstname").value;
  let lName = document.querySelector("#lastname").value;
  let pNum = document.querySelector("#p_number").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;

  //   All fields are required
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

  //   Removing previous error messages
  document.querySelector(".email-error").innerText = "";
  document.querySelector(".pass-error").innerText = "";
  document.querySelector(".num-error").innerText = "";

  /* 

//   let fields = [
//     {
//       id: "firstname",
//       name: "First Name",
//     },
//     {
//       id: "lastname",
//       name: "Last Name",
//     },
//     {
//       id: "p_number",
//       name: "Phone Number",
//     },
//     {
//       id: "email",
//       name: "Email",
//     },
//     {
//       id: "password",
//       name: "Password",
//     },
//   ];

  //  This make sure that all fields are filled and Added error message(color)
//   let errMsg = document.querySelectorAll(".error-msg");
//   errMsg.forEach((msg) => (msg.style.color = "green"));

//   fields.forEach((field, index) => {
//     let val = document.querySelector(`#${field.id}`).value.trim();

//     if (val === "") {
//       errMsg[index].style.color = "red";
//     }
//     return false;
//   });

*/

  // First Name validation
  if (!/^[A-Za-z]+$/.test(fName)) {
    document.querySelector(".fname-error").innerText = "Only alphabets are allowed!";
    return false;
  } else {
    document.querySelector(".fname-error").innerText = "";
  }

  // Last name validation
  if (!/^[A-Za-z]+$/.test(lName)) {
    document.querySelector(".lname-error").innerText = "Only alphabets are allowed!";
    return false;
  } else {
    document.querySelector(".lname-error").innerText = "";
  }

  //   Phone number validation
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
};
