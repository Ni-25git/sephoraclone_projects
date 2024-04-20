let btn = document.querySelector("#btn")
let container = document.querySelector("#container")

let handleFetchingTodos= (URL)=>{
    console.log("working")
    let data = fetch("https://jsonplaceholder.typicode.com/todos")

    data.then((res)=>{
        return res.json();  // for converting data=> data.parse
    }).then((res)=>{
        showData(res) // Log the parsed JSON data
    }).catch((error)=>{
        console.log(error)
    })
}

let showData=(data)=>{
    data.forEach((todos)=>{
        let div = document.createElement("div")


        let title = document.createElement("p")
        title.innerHTML= todos.title

        let value = document.createElement("input")
        value.type="checkbox"
        value.disabled=true
        value.checked = todos.completed

        if(todos.completed){
            value.setAttribute("checked",'checked');
        }

        div.append(title,value)
        container.append(div)

    })

}



btn.addEventListener("click",handleFetchingTodos)
