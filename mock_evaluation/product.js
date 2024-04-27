let container = document.querySelector("#container")
let inputBox = document.querySelector("#search")
let cloth = document.querySelector("#cloth")
let range = document.querySelector("#range")
let product=[]




let getData= async (URL)=>{
    try {
        let res = await fetch(URL)
        let data = await res.json();
        

        if(res.ok){
            showData(data)
            product.push(data)
        }else{
            console.log("error in res")
        }
        
    } catch (error) {
        console.log(error)
    }
}
getData("https://fakestoreapi.com/products")

let showData = async (arr)=>{
    container.innerHTML=""
    try {
        arr.forEach((ele)=>{
            let div = document.createElement("div")
    
            let img = document.createElement("img")
            img.src = ele.image
             
            let title = document.createElement("h2")
            title.innerHTML= ele.title
    
            let price = document.createElement("p")
            price.textContent = `Price: $${ele.price}`
    
            div.append(img,title,price)
            container.append(div)
           
    
        })
        
    } catch (error) {
        console.log(error)
    }
}

let sortData = ()=>{
    let value = range.value
   if(value==="low"){
    getData("https://fakestoreapi.com/products?sort=asc")
   }else if(value==="high"){
   getData("https://fakestoreapi.com/products?sort=desc") 
   }
}


let sortCategory=()=>{
    let value2=cloth.value
    if(value2=="men's clothing"){
        getData(`https://fakestoreapi.com/products/category/${value2}`)
    }else if(value2=="jewelery"){
        getData(`https://fakestoreapi.com/products/category/${value2}`)
    }else if(value2=="electronics"){
        getData(`https://fakestoreapi.com/products/category/${value2}`)

    }else if(value2=="women's clothing"){
        getData(`https://fakestoreapi.com/products/category/${value2}`)

    }

}

let searchData=(searchTerm)=>{
    let value3 = inputBox.value;
    let narr = product.filter(product=>{
        return product.title.toLowerCase().includes(searchTerm.toLowercase());
    })
    showData(narr)
    // let narr = products.filter((ele,i)=>{
    //     return ele.title.toLowerCase()===value.toLowerCase()
    // })
    // console.log(narr)
    

    // if(narr.length===0){
    //     container.innerHTML='<h2>Product not found</h2>'
    // }else{
    //     showData(narr)
    // }

}

range.addEventListener("change",sortData)
cloth.addEventListener("change",sortCategory)
inputBox.addEventListener("input",function(){
    const searchTerm = this.value;
    searchData(searchTerm)
})
