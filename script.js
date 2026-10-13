
function generateTable() {

    // Get the number entered by the user
    let num = document.getElementById("number").value;

    // Get the result container
    let result = document.getElementById("result");

    // Validate input
    if (num === "") {
        result.innerHTML = "Please enter a number!";
        return;
    }

    num = Number(num);

    // Clear the previous table
    result.innerHTML = "";

    // Generate table from 1 to 10
    for (let i = 1; i <= 10; i++) {

        let answer = num * i;

        // Create a table row
        let row = document.createElement("div");
        row.className = "table-row";

        row.textContent = `${num} × ${i} = ${answer}`;

        // Add row to the page
        result.appendChild(row);
    }
}
