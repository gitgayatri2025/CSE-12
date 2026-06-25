function calculateResult(){
    let n= document.getElementById("subjects").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks= parseFloat(prompt("enter marks for sbjects "+i));
        total= total+ marks;
    }
    let avg= total/n;
    let grade;
    let result;
    if ( avg>=90){
        grade= "A+"
    }
    else if( avg>=75){
        grade=" A";
    }
    else if( avg>=55){
        grade="B";
    }
    else if( avg>=35){
        grade=" C";
    }

    else{
        grade= "F";
    }
    if(avg>=40){
        result="PASS";
    }
    else{
        result="FAIL";
    }
    document.getElementById("result").innerHTML=
    "total marks: "+ total+ "<br>"+
    "average marks: "+ avg.toFixed(2)+ "<br>"+
    "grade: "+ grade+ "<br>"+
    "result: "+ result+ "<br>"

}


