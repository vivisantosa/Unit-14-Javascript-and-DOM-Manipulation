/* 
UFO SIGHTING

Unit 14 JavaScript and DOM Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-25 <br>
*/

// PART 1: Automatic Table
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
    Object.entries(user).forEach(([key, value]) => {
        // Log the key and value
        var cell = row.append("td");
        cell.text(value);
    });
});
console.log("Part 1 is done");

// PART 2: Date Search
// Codes that search through the date/time column to find rows that match user input.

console.log("-- INPUT HANDLER --");
// grab references to the input element 
var text = d3.select("#datetime");

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

text.on("change", handleChange);

console.log("Part 2 is done");