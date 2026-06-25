function generateReport() {
    let s1 = parseFloat(document.getElementById("sub1").value);
    let s2 = parseFloat(document.getElementById("sub2").value);
    let s3 = parseFloat(document.getElementById("sub3").value);
    let s4 = parseFloat(document.getElementById("sub4").value);

    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    let result = (percentage >= 40) ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h3>Report Card</h3>
        <p>Subject 1: ${s1}</p>
        <p>Subject 2: ${s2}</p>
        <p>Subject 3: ${s3}</p>
        <p>Subject 4: ${s4}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Result:</strong> ${result}</p>
    `;
}