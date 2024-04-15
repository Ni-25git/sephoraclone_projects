// fill in javascript code here
let form = document.querySelector("form")

let tbody = document.querySelector("tbody")

function handleSubmit(e){
    e.preventDefault()

    let name = document.getElementById("name").value
    let employeeID = document.getElementById("employeeID").value
    let department = document.getElementById("department").value
    let exp = document.getElementById("exp").value
    let email = document.getElementById("email").value
    let mbl = document.getElementById("mbl").value
    let role = calculateRole(exp)

    let dataTbody = `
    <tr>
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${exp}</td>
        <td>${email}</td>
        <td>${mbl}</td>
        <td>${role}</td>
        <td><button onClick="deleteRow(this)">Delete</button></td>
     </tr>`
     tbody.innerHTML+=dataTbody
     saveData()
     form.reset()
}

function calculateRole(exp){
    if(exp > 5){
        return "Senior";
    }else if(exp>=2 && exp<=5){
        return "Junior";
    }else{
        return "Fresher";
    }
}

function deleteRow(row){
    let r = row.closest("tr")
    r.parentNode.removeChild(r);
    saveData()
}

function saveData(){
    let rows = tbody.querySelectorAll("tr")
    let data=[];

    rows.forEach((row)=>{
        let rowData={
            name: row.cells[0].textContent,
            employeeID: row.cells[1].textContent,
            department: row.cells[2].textContent,
            exp: row.cells[3].textContent,
            email: row.cells[4].textContent,
            mbl: row.cells[5].textContent,
            role: row.cells[6].textContent,
        }
        data.push(rowData)
    })
    localStorage.setItem("employeeData",JSON.stringify(data))
    
}

function loadData(){
    let saveData = JSON.parse(localStorage.getItem("employeeData"))

    saveData.forEach(data=>{
        let dataTbody = `<tr>
        <td>${data.name}</td>
        <td>${data.employeeID}</td>
        <td>${data.department}</td>
        <td>${data.exp}</td>
        <td>${data.email}</td>
        <td>${data.mbl}</td>
        <td>${data.role}</td>
        <td><button onClick="deleteRow(this)">Delete</button></td>
     </tr>`
     tbody.innerHTML+=dataTbody
    })
}


form.addEventListener("submit",function(event){
    handleSubmit(event)
})
