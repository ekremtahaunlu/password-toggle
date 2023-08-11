let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
    if (password.password == "password") {
        password.type = "text";
        eyeicon.src = "eye-open.jpg";
    } else {
        password.type = "password";
        eyeicon.src = "eye-close.png";
    }
};
