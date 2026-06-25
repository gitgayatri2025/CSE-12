var employees = [];

function addEmployee(){

    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var salary = document.getElementById("salary").value;
    var department = document.getElementById("department").value;

    var emp = {
        name : name,
        id : id,
        salary : salary,
        department : department
    };

    employees.push(emp);

    alert("Employee Added");
}


function displayEmployees(){

    var text = "";

    for(var i=0; i<employees.length; i++){

        text = text + 
        "Name: " + employees[i].name +
        " | ID: " + employees[i].id +
        " | Salary: " + employees[i].salary +
        " | Department: " + employees[i].department +
        "<br>";
    }

    document.getElementById("output").innerHTML = text;
}


function filterSalary(){

    var text = "";

    for(var i=0; i<employees.length; i++){

        if(employees[i].salary > 50000){

            text = text + employees[i].name + 
            " - Salary: " + employees[i].salary + "<br>";
        }
    }

    document.getElementById("output").innerHTML = text;
}


function totalSalary(){

    var total = 0;

    for(var i=0; i<employees.length; i++){

        total = total + Number(employees[i].salary);
    }

    document.getElementById("output").innerHTML =
    "Total Salary Payout: ₹" + total;
}


function averageSalary(){

    var total = 0;

    for(var i=0; i<employees.length; i++){

        total = total + Number(employees[i].salary);
    }

    var avg = total / employees.length;

    document.getElementById("output").innerHTML =
    "Average Salary: ₹" + avg;
}


function countDepartment(){

    var dept = document.getElementById("deptSearch").value;
    var count = 0;

    for(var i=0; i<employees.length; i++){

        if(employees[i].department == dept){

            count++;
        }
    }

    document.getElementById("output").innerHTML =
    "Employees in " + dept + " Department: " + count;
}