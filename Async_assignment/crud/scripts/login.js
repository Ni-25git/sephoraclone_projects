let form = document.querySelector("#form")
let loginBtn = document.querySelector("#loginBtn")

let loadData = ()=>{
    let savedData = JSON.parse(localStorage.getItem("data"))

    if(savedData!=null){
        data=savedData
    }
}

let handleLogin = async (e)=>{
    e.preventDefault()

    let email = document.querySelector("#email").value
    let pass = document.querySelector("#password").value
    loadData()
    
    try {
        let res = await fetch("http://localhost:3000/users",{
            method: "GET" ,
            headers: {
                "content-type": "application/json"
            },
        });
        let data = await res.json() 

        let user = data.find(user=>user.email===email && user.pass===pass);

        if(user){
            console.log("logged in")
            alert("Logged in successfully")
            localStorage.setItem("user", JSON.stringify(user.username));
            
            window.location.href="product.html"
        }else{
            console.log("wrong passs")
            alert("wrong pass or wrong email")
        }

        console.log(user.username)

    } catch (error) {
        console.log(error)
    }
}



loginBtn.addEventListener("click",(e)=>{
    handleLogin(e)
})


