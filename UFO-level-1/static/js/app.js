// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select tbody element from html
var tbody = d3.select("tbody");

// Adding event listener for date input
var inputField = d3.select("#datetime");


// print data
// Commenting out, now that we know the data is printing correctly
// console.log(tbody);

// Confirm we are grabbing data correctly from data.js
// Commenting out, now that we know the data is printing correctly
// tableData.forEach(function(printData){
//     console.log(printData)
// });


// Add table data to webpage
// For each row of data 
tableData.forEach((ufoData) => {
    // Add row to table
    var row = tbody.append("tr");
    // Get key and value for each element of the js Object
    Object.entries(ufoData).forEach(([key, value]) => {
        // Declare cell for column on the new row of data
        var cell = row.append("td");
        // Add the value to the column
        cell.text(value)
    });
});

inputField.on("change", function() {
    // var newText = Date(inputField);
    var newText = inputField.property("value");
    console.log(newText);
    // var filteredData = tableData.filter(ufo => ufo.datetime == newText);
    // tableData = filteredData;
    console.log("------");
    console.log("Filtered Data:");
    // console.log(filteredData);

    // return tableData;
    // return tableData.datetime == newText;
    return tableData.filter(function(row){return row.datetime == newText;});
    // console.log(filterData);
  });