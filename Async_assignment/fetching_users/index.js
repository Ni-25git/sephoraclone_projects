let btn = document.querySelector("#btn")
let container = document.querySelector("#container")


let fetchingUsers = ()=> {
    console.log("working")
    let data = fetch("https://reqres.in/api/users")

    data.then((res)=>{
        return res.json() // Pass res.data instead of res to showData function
    })
    .then((res)=>{
        showData(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })

}

let showData = (data)=>{
    data.forEach((users)=>{      // Iterate over data, assuming it's an array
        let div = document.createElement("div")

        div.innerHTML = `
        <img src="${users.avatar}" alt="avatar"/>
        <h3>Id: ${users.id}</h3>
        <h3>Email: ${users.email}</h3>
        <h3>FirstName: ${users.first_name}</h3>
        <h3>LastName: ${users.last_name}</h3>

        `
        container.append(div)
    })

    console.log("chlra h")

}




btn.addEventListener("click",fetchingUsers)