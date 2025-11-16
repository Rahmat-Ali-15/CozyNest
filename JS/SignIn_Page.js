const signUpForm = (e) => {
    e.preventDefault();

    let signUpEmail = document.querySelector("#email").value;
    let signUpPass = document.querySelector("#password").value;

    if(signUpEmail.trim() === "" || signUpPass.trim() === ""){
        alert("All fields are required!!!");
        return false;
    }
}