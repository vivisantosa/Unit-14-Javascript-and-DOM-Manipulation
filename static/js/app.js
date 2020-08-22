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