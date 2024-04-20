
    let container = document.querySelector("#container");
    let btn = document.querySelector("#btn");
    let input = document.querySelector("#input");

    let fetchingData = (URL) => {
        console.log("working");

        let data = fetch(URL);

        data.then((res) => {
                return res.json();
            })
            .then((res) => {
                showData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let showData = (data) => {
        container.innerHTML = ""; // Clear previous data

        data.forEach((country) => {
            let div = document.createElement("div");

            div.innerHTML = `
                <h3>Country: ${country.country}</h3>
                <p>id: ${country.id}</p>
                <p>Rank: ${country.Rank}</p>
                <p>Population: ${country.population}</p>
            `;
            container.append(div);
        });
        console.log("working show data");
        
    };

    let sortData = (data)=>{
        let value = input.value
        let narr;
        console.log(value)
        if(value==="asc"){
          console.log("ascending order")
          fetchingData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`)
          }
          else if(value==="desc"){
            console.log("descending")
            fetchingData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`)
          }
        
    }

    btn.addEventListener("click", ()=>{
        fetchingData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    });

    input.addEventListener("change",sortData)

    

    

