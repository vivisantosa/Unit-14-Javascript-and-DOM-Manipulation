/* 
UFO SIGHTING

Unit 14 JavaScript and DOM Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-25 <br>
*/

// PART 1: Automatic Table
// Codes that appends a table to the web page using dataset in JavaScript objects form
function displayTable(tblData) {
  tblData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => row.append("td").text(value))
  });
}

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
console.log("Part 1 is done");

// PART 2: Date Search
// Codes that search through the date/time column to find rows that match user input.

console.log("-- INPUT HANDLER --");
// grab references to the input element 
var inputBox = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;
  console.log(`A. inputText : ${inputText}`);
  // reverse the input string
  var reversedInput = reverseString(inputText);
  console.log(reversedInput);
}

function resetTable(){
  //prevent page from refreshing
  d3.event.preventDefault();
  //remove data from rows so that filtered tabel can be rendered
  tableBody.selectAll('tr').remove()
  //remove selection of defaults on dropdowns
  d3.selectAll('.default').attr("selected", null)
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;
  console.log(`A. inputText : ${inputText}`);
  // reverse the input string
  var reversedInput = reverseString(inputText);
  console.log(reversedInput);
}

inputBox.on("change", handleChange);

// Use D3 `.on` to attach a click handler for the upvote
filterButton.on("click", function() {
  // Select the current count
  console.log(`Filter Table buttom being clicked`);
});

resetButton.on("click", function() {
  // Select the current count
  console.log(`Reset Table buttom being clicked`);
});

console.log("Part 2 is done");

// PART 3
 //create variable for date input value
var pickDate = "1/5/2010";

 //create variable for date input value
function onTheDate(sighting) {
  console.log(pickDate);
  return sighting.datetime == pickDate;
}
// Call the custom function with filter()
var sigthingsOnList = data.filter(onTheDate);

// Display the results
console.log(sigthingsOnList);

//clear table

//prevent page from refreshing
d3.event.preventDefault();
//remove data from rows so that filtered tabel can be rendered
tableBody.selectAll('tr').remove()
//remove selection of defaults on dropdowns
d3.selectAll('.default').attr("selected", null)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through array of objects then each object
sigthingsOnList.forEach((user) => {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");
    // Get the entries for each object in the array
    Object.entries(user).forEach(([key, value]) => row.append("td").text(value))
});




/*
// Loop through array of objects then each object
data.forEach((user) => {
  // Append one table row `tr` to the table body
  console.log(user);
  // Get the entries for each object in the array
  //Object.entries(user).forEach(([key, value]) => row.append("td").text(value))
});*/
console.log("Part 3 is done");