
let form = document.querySelector("#form");
let btn = document.querySelector("#submit");

let data = [];

function saveData() {
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"));

    if (savedData) {
        data = savedData;
    }
}

function handleSubmit(e) {
    e.preventDefault();
    console.log("working");

    let username = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let obj = {
        username: username,
        email: email,
        password: pass
    };
    data.push(obj);
    console.log(data);
    saveData();
    alert("Registration successful");
    window.location.href = "login.html";
}

// function handleLogin(e) {
//     e.preventDefault();

//     let email2 = document.getElementById("email").value;
//     let pass2 = document.getElementById("password").value;

//     loadData(); 

//     let user = data.find(user => user.email === email2 && user.password === pass2);

//     if (user) {
//         console.log("Logged in");
//     } else {
//         console.log("Wrong credentials");
//     }
//     window.location.href="sephora.html"
// }

// btnLogin.addEventListener("click", function(event) {
//     handleLogin(event);
// });

btn.addEventListener("click", function(event) {
    handleSubmit(event);
});

loadData()
