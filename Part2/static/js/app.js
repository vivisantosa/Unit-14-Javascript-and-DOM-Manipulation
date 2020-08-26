/* 
UFO SIGHTING

Unit 14 JavaScript and DOM Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-26 <br>
*/

// PART 2: TABLE WITH MULTIPLE SEARCH  

// Get the data for the table from data.js
var tableData = data;

// SECTION 1 create drop down menu

// create unique lists based on data (for drop downs)
var distinctDates=[]
var distinctCities=[]
var distinctStates=[]
var distinctCountries=[]
var distinctShapes=[]

// fill the list
tableData.forEach(function(record){
  if(distinctDates.includes(record.datetime)===false){
      distinctDates.push(record.datetime)
  }
  if(distinctCities.includes(record.city)===false){
      distinctCities.push(record.city)
  }
  if(distinctStates.includes(record.state)===false){
      distinctStates.push(record.state)
  }
  if(distinctCountries.includes(record.country)===false){
      distinctCountries.push(record.country)
  }
  if(distinctShapes.includes(record.shape)===false){
      distinctShapes.push(record.shape)
  }
});

//attach the list value to the drop down menu
var selectDate=d3.select('#datedrop')
distinctDates.forEach(function(date){
    selectDate.append('option').html(`<option value=${date}>${date}</option>`)
});
var selectCity=d3.select('#citydrop')
distinctCities.forEach(function(city){
    selectCity.append('option').html(`<option value=${city}>${city}</option>`)
});
var selectState=d3.select('#statedrop')
distinctStates.forEach(function(state){
    selectState.append('option').html(`<option value=${state}>${state}</option>`)
});
var selectCountry=d3.select('#countrydrop')
distinctCountries.forEach(function(country){
    selectCountry.append('option').html(`<option value=${country}>${country}</option>`)
});
var selectShape=d3.select('#shapedrop')
distinctShapes.forEach(function(shape){
    selectShape.append('option').html(`<option value=${shape}>${shape}</option>`)
});


// SECTION 2: Display basic table
// Appends a table to the web page using dataset in JavaScript objects form

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through array of objects then each object
data.forEach((user) => {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");
    // Get the entries for each object in the array
    Object.entries(user).forEach(([key, value]) => row.append("td").text(value))
});


// SECTION 3: Functions
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
  const date = d3.select("#datedrop").property("value");
  return tableData.filter(row => row.datetime === date);
}

// function collect the list of search-keys (skipping empty search input boxes)
function getFilterKey(){
  var listOfKeys = {  datetime : d3.select("#datedrop").property("value"), 
                      city : d3.select("#citydrop").property("value"), 
                      state : d3.select("#statedrop").property("value"), 
                      country : d3.select("#countrydrop").property("value"), 
                      shape : d3.select("#shapedrop").property("value") };

  var filterKeys = {};
  //Iterating through the list of keys, push only filterKeys that has value
  for (var fkey in listOfKeys){
    if (listOfKeys[fkey] != "default"){
      filterKeys[fkey] = listOfKeys[fkey];}
  }
  return filterKeys
}

// function to filter data with a multiple search keys
function filterMultiKey(){ 
  var filter = getFilterKey();
  console.log(filter);

  filteredData = tableData.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });
  return filteredData
}


// Section 4 : Connecting with buttons to process an action
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
  console.log(`Filter Table buttom being clicked`);
  var filteredData = filterMultiKey();
  console.log(filteredData); 
  displayTable(filteredData);
  console.log(`Filtered Table Displayed !!!`); 
});

var resetButton = d3.select("#reset-btn");
resetButton.on("click", function() {
  console.log(`Reset Table buttom being clicked`);
  displayTable(tableData);
  console.log(`Table Reseted !!!`); 
});

console.log("Loading is done");


