/* 
UFO SIGHTING

Unit 14 JavaScript and DOM Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-26 <br>
*/

// PART 1: TABLE WITH SEARCH ON DATE ONLY 
// SECTION 1: Automatic Table
// Appends a table to the web page using dataset in JavaScript objects form

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


// SECTION 2: Functions
// function to display data on table.
function displayTable(tblData) {
  tbody.html("");                                                           // clean table body;
  tblData.forEach((entry) => {
    const row = tbody.append("tr");                                         // prepare each row in table body
    Object.values(entry).forEach((value) => row.append("td").text(value))   // for each row, put data (value) in each cell
  });
}
// function to filter data with a single search key
function filterSingleKey(){
  const date = d3.select("#datetime").property("value");
  console.log(`FilterKey = date : ${date}`);
  return tableData.filter(row => row.datetime === date);
}


// Section 3 : Connecting with buttons to process an action
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
  var filteredData = filterSingleKey();
  console.log(filteredData); 
  displayTable(filteredData);
  console.log(`Filtered Table Displayed !!!`); 
});

var resetButton = d3.select("#reset-btn");
resetButton.on("click", function() {
  displayTable(tableData);
  console.log(`Table Reseted !!!`); 
});

console.log("Loading is done");


