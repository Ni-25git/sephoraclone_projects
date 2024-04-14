let Products =[
    {
        title : "JVN",
        description : "Complete Blowout Styling Milk",
        img : "https://www.sephora.com/productimages/sku/s2389252-main-zoom.jpg?pb=clean-at-sephora&imwidth=250",
        price : 1400
      },
      {
          title : "Gisou",
          description : "Mini Honey Perfume",
          img : "https://www.sephora.com/productimages/sku/s2656288-main-zoom.jpg?imwidth=250",
          price : 1999
        },
      {
        title : "OUAI",
        description : "Frizz Conditioner",
        img : "https://www.sephora.com/productimages/sku/s2483139-main-zoom.jpg?imwidth=250",
        price : 1599
      },
      {
        title : "Pattern Ross",
        description : "Styling Cream",
        img : "https://www.sephora.com/productimages/sku/s2707982-main-zoom.jpg?imwidth=250",
        price : 1499
      },
      {
        title : "Verb",
        description : "Mini Glossy Spray",
        img : "https://www.sephora.com/productimages/sku/s2740421-main-zoom.jpg?imwidth=250",
        price : 3999
      },
      {
        title : "Moroconnail",
        description : "All in one Conditioner",
        img : "https://www.sephora.com/productimages/sku/s1930759-main-zoom.jpg?imwidth=250",
        price : 1199
      },
      {
        title : "JVN",
        description : "Hair Styling Cream",
        img : "https://www.sephora.com/productimages/sku/s2539542-main-zoom.jpg?pb=clean-at-sephora&imwidth=250",
        price : 1299
      },
      {
        title : "JVN",
        description : "Mini Styling Milk",
        img : "https://www.sephora.com/productimages/sku/s2747038-main-zoom.jpg?imwidth=250",
        price : 1899
      },

      {
        title : "Morroconail",
        description : "Shield Spray",
        img : "https://www.sephora.com/productimages/sku/s2577443-main-zoom.jpg?imwidth=250",
        price : 1799
      },
      {
        title : "Pattern Ross",
        description : "Cream for Curly Hair",
        img : "https://www.sephora.com/productimages/sku/s2737070-main-zoom.jpg?pb=clean-at-sephora&imwidth=250",
        price : 599
      },
      {
        title : "JVN",
        description : "Mini Blowout Styling Milk",
        img : "https://www.sephora.com/productimages/sku/s2569747-main-zoom.jpg?imwidth=250",
        price : 1599
      },
      {
        title : "JVN",
        description : "Instant Recovery Heat Proctent",
        img : "https://www.sephora.com/productimages/sku/s2437267-main-zoom.jpg?imwidth=250",
        price : 1499
      },
      {
        title : "JVN",
        description : "Dry Hair styling Cream",
        img : "https://www.sephora.com/productimages/sku/s2030559-main-zoom.jpg?imwidth=250",
        price : 599
      },
      {
        title : "JVN",
        description : "Mini Complete Styling Cream",
        img : "https://www.sephora.com/productimages/sku/s2759488-main-zoom.jpg?pb=clean-planet-aware&imwidth=250",
        price : 2199
      },
      {
        title : "Color Wow",
        description : "Money Mist Leave ",
        img : "https://www.sephora.com/productimages/sku/s2070258-main-zoom.jpg?imwidth=250",
        price : 1999
      },
      {
        title : "Pureology",
        description : "Color fantic Heat Proctent",
        img : "https://www.sephora.com/productimages/sku/s2127389-main-zoom.jpg?imwidth=250",
        price : 1799
      },
      {
        title : "DAe",
        description : "Cactus Fruit Cream",
        img : "https://www.sephora.com/productimages/sku/s2592319-main-zoom.jpg?imwidth=250",
        price : 899
      },
      {
        title : "Color Wow",
        description : "Dream Coat Spray",
        img : "https://www.sephora.com/productimages/sku/s2044691-main-zoom.jpg?imwidth=250",
        price : 1199
      },
      {
        title : "Kearstae",
        description : "Damaged Hair Styled Cream",
        img : "https://www.sephora.com/productimages/sku/s2694339-main-zoom.jpg?imwidth=250",
        price : 1499
      },
      {
        title : "DAE",
        description : "Shampoo Powder",
        img : "https://www.sephora.com/productimages/sku/s2496198-main-zoom.jpg?imwidth=250",
        price : 1500
      },

]

let productContainer = document.querySelector("#productContainer");
let inputBox = document.querySelector(".input")
let searchBtn = document.querySelector("#navbar-search")


function saveData(){
    localStorage.setItem('Products', JSON.stringify());

}

function loadData(){
    let savedData = JSON.parse(localStorage.getItem(Products))

    if(savedData){
        Products=savedData
    }
}



// Function to display product data
function showData() {

    productContainer.innerHTML = "";
    

    Products.forEach(function(ele) {
        // Create separate div for each product
        let separateDiv = document.createElement("div");

        // Create title element
        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        // Create image element
        let img = document.createElement("img");
        img.src = ele.img;

        // Create description element
        let desc = document.createElement("p");
        desc.innerText = ele.description;

        // Create price element
        let price = document.createElement("p");
        price.innerText = ele.price;

        // Create delete button element
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete 🗑️";
        deleteBtn.addEventListener("click", function() {
            deleteData(i);
        });
        separateDiv.append(img, title, desc, price, deleteBtn);

        // Append separate div to product container
        productContainer.append(separateDiv);
    });
    console.log(Products)

   
}
function deleteData(index){
        Products.splice(index , 1)
        saveData()
        showData(Products)
    }

    // function searchData(){
    //     let value = inputBox.value
    //     let narr = Products.filter(function(ele,i){
    //          return ele.title.toLowerCase() === value.toLowerCase()
    //     })
    
    //     console.log(narr)
        
    //     if(narr.length===0){
    //         productContainer.innerHTML= "<h2>Product not found ...</h2>"
    //     }else{
    //         showData(narr)
    //     }
        
    // }

    function searchData() {
        let value = inputBox.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
        let narr = Products.filter(function(ele) {
            return ele.title.toLowerCase().includes(value); // Check if the product title contains the search value
        });
    
        if (narr.length === 0) {
            productContainer.innerHTML = "<h2>Product not found ...</h2>";
        } else {
            showData(narr); // Display filtered products
        }
    }
    searchBtn.addEventListener("click",searchData)

    loadData()

showData();


