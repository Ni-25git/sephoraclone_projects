let btn = document.querySelector("button");
let container = document.querySelector("#container");
let navbar = document.querySelector("#navbar");
let cartTotal = document.querySelector("#cartTotal")

let saveData = () => {
  localStorage.setItem("productData", JSON.stringify(cartData));
};

let loggedUser = JSON.parse(localStorage.getItem("user"));

if (loggedUser) {
  navbar.textContent = `Welcome: ${loggedUser}`;
  console.log(loggedUser);
} else {
  navbar.textContent = "Welcome";
}

let getdata = async (URL) => {
  try {
    let res = await fetch(URL);
    let data = await res.json();
    showData(data);
    cartTotalPrice();
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

getdata("http://localhost:3000/products");
container.innerHTML = "";

let showData = (arr) => {
  arr.forEach((ele) => {
    let div = document.createElement("div");

    let img = document.createElement("img")
    img.src=ele.src
    let h3 = document.createElement("h3");
    h3.textContent = ` ${ele.title}`;
    let h4 = document.createElement("h4");
    h4.textContent = ` ${ele.price}`;
    let h5 = document.createElement("h5");
    h5.textContent = `${ele.ratings}`;
    let addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.addEventListener("click", function () {
      cartUserData(ele);
    });
    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.addEventListener("click",()=>{
        deleteCartData(ele)
    })


    div.append(img,h3,h4,h5,addBtn,delBtn)
    container.append(div);
  });
};

let cartUserData = async (ele) => {
  try {
    // Fetch the current cart data from the server
    let res = await fetch("http://localhost:3000/allUsersCart");
    let data = await res.json();

    // Update the cart data with the new element for the logged-in user
    // data[loggedUser].push(ele);
    if (data[loggedUser] === undefined) {
      data[loggedUser] = [];
      data[loggedUser].push(ele);
    } else {
      data[loggedUser].push(ele);
    }

    // Send a POST request to update the cart data on the server
    let response = await fetch("http://localhost:3000/allUsersCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the request was successful
    if (response.ok) {
      console.log("Product added to user's cart");
    } else {
      console.error("Failed to add product to user's cart");
    }
  } catch (error) {
    console.error("Error adding product to user's cart:", error);
  }
  cartTotalPrice()
};

let deleteCartData = async (ele) => {
    try {
      // Fetch the current cart data from the server
      let res = await fetch("http://localhost:3000/allUsersCart");
      let data = await res.json();
  
      // Check if the logged-in user's cart exists
      if (data[loggedUser]) {
        // Find the index of the element to delete in the user's cart
        let index = data[loggedUser].findIndex((item) => item.id === ele.id);
  
        // If the element exists in the cart, remove it
        if (index !== -1) {
          data[loggedUser].splice(index, 1);
        }
      }
      
  
      // Send a POST request to update the cart data on the server
      let response = await fetch("http://localhost:3000/allUsersCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Check if the request was successful
      if (response.ok) {
        console.log("Product deleted from user's cart");
      } else {
        console.error("Failed to delete product from user's cart");
      }
    } catch (error) {
      console.error("Error deleting product from user's cart:", error);
    }
  };

  let cartTotalPrice = async()=>{
    try {
        let res = await fetch("http://localhost:3000/allUsersCart")
        let data = await res.json()
        if(data[loggedUser]===undefined){
            cartTotal.textContent =`Your Total Cart Value is RS.0` 
        }else{
            let sum = data[loggedUser].reduce((a,ele,i)=>{
                return a+ele.price
            },0);
            cartTotal.textContent=`Your Total cart Value is Rs:${sum}`
        }
        
    } catch (error) {
        
    }
  }
  
