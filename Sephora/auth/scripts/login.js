let formLogin = document.querySelector("#form-login");
let btnLogin = document.getElementById("login");

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"));

    if (savedData) {
        data = savedData;
    }
}

function handleLogin(e) {
    e.preventDefault();

    let email2 = document.getElementById("email").value;
    let pass2 = document.getElementById("password").value;

    loadData(); 

    let user = data.find(user => user.email === email2 && user.password === pass2);

    if (user) {
        alert("Logged in");
        window.location.href="sephora.html"
    } else {
        alert("Wrong Password");
    }
   
}

btnLogin.addEventListener("click", function(event) {
    handleLogin(event);
});