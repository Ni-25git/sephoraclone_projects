

    let department = document.querySelector("#department");
    let gender = document.querySelector("#gender");
    let salary = document.querySelector("#salary");
    let prevBtn = document.querySelector("#prev");
    let nextBtn = document.querySelector("#next");
    let employeeData = document.querySelector("#employeeData");

    let currentPage = 1;
    let currentFilterBy = '';
    let currentFilterValue = '';
    let currentSortOrder = '';
    let data = [];

    function getData(page = 1){
        let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`;
        if(currentFilterBy && currentFilterValue){
            url += `&filterBy=${currentFilterBy}&filterValue=${currentFilterValue}`;
        }
        if(currentSortOrder){
            url += `&sort=salary&order=${currentSortOrder}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(res => {
                data = res.data;
                showData(data);
                prevBtn.disabled = currentPage === 1;
                nextBtn.disabled = data.length < 10;
            })
            .catch(error => console.log(error));
    }

    function showData(data){
        employeeData.innerHTML = "";
        data.forEach((employee, i) => {
            let row = `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
            employeeData.innerHTML += row;
        });
    }

    function applyFilters(){
        currentPage = 1;
        currentFilterBy = department.value || gender.value;
        currentFilterValue = currentFilterBy === 'gender' ? gender.value : department.value;
        getData();
    }

    function sort(){
        currentPage = 1;
        currentSortOrder = salary.value;
        getData();
    }

    department.addEventListener("change", applyFilters);
    gender.addEventListener("change", applyFilters);
    salary.addEventListener("change", sort);
    prevBtn.addEventListener("click", () => {
        if(currentPage > 1){
            currentPage--;
            getData(currentPage);
        }
    });
    nextBtn.addEventListener("click", () => {
        currentPage++;
        getData(currentPage);
    });

    getData();

