


let form = document.querySelector("#form");
let btn = document.querySelector("#submit");
let data = [];

let saveData = () => {
    localStorage.setItem("data", JSON.stringify(data)); // Use setItem to save data
};

let loadData = () => {
    let savedData = JSON.parse(localStorage.getItem("data"));

    if (savedData !== null) { // Check if savedData is not null before assigning
        data = savedData;
    }
};

let handleSignup = async (e) => {
    e.preventDefault();
    console.log("signup user");

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let obj = {
        username,
        email,
        pass
    };

    try {
        let res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        if (res.ok) {
            data.push(obj);
            saveData();
            window.location.href = "login.html"; // Move redirection here
        } else {
            alert("Registration failed. Please try again later."); // Display error message
        }

        await res.json();
    } catch (error) {
        console.error(error); // Display error message
    }
};

btn.addEventListener("click", (e)=>{
    handleSignup(e);
});

loadData();
