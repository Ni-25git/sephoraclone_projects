let login = document.querySelector("#login")
let signup = document.querySelector("#signup")

let handleLogin =()=>{
    alert("firstly you can sign the users")
}
let handleSignup = ()=>{
    console.log("signup")
    window.location.href="signup.html"
}



login.addEventListener("click",handleLogin)
signup.addEventListener("click",handleSignup)