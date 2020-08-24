/* 
UFO SIGHTING

Unit 14 JavaScript and DOM Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-25 <br>
*/

// PART 1: TABLE WITH SEARCH ON DATE ONLY 
// SECTION 1: Automatic Table
// Codes that appends a table to the web page using dataset in JavaScript objects form


// Get the data for the table from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through array of objects then each object
data.forEach((user) => {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");
    // Get the entries for each object in the array
    Object.entries(user).forEach(([key, value]) => row.append("td").text(value))
});
console.log("Section 1 is done");


// SECTION 2: Data Filtering and other functions
// Codes that search through the date/time column to find rows that match user input.

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;
  console.log(`A. inputText : ${inputText}`);
}

function displayTable(tblData) {
  tbody.html("");
//  var tbody = d3.select("tbody");
  tblData.forEach((entry) => {
    const row = tbody.append("tr");
    Object.values(entry).forEach((value) => row.append("td").text(value))
  });
}

function filterSingleVar(){
  const date = d3.select("#datetime").property("value");
  console.log(date);

//  let baseData = tableData;
  return tableData.filter(row => row.datetime === date);
}
console.log("Section 2 is done");

// Section 3 : Connecting with buttons

// console.log("-- INPUT HANDLER --");
// grab references to the input element 
var inputBox = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// inputBox.on("change", handleChange);

// Use D3 `.on` to attach a click handler for the upvote
filterButton.on("click", function() {
  console.log(`Filter Table buttom being clicked`);
  var filteredData = filterSingleVar();
  console.log(filteredData); 
  displayTable(filteredData);
  console.log(`Filtered Table Displayed !!!`); 
});

resetButton.on("click", function() {
  console.log(`Reset Table buttom being clicked`);
  displayTable(tableData);
  console.log(`Table Reseted !!!`); 
});

console.log("Section 3 is done");


