# UFO Sightings

<img src="https://www.gannett-cdn.com/media/2018/06/29/USATODAY/usatsports/247WallSt.com_gallery-247WS-474092-ufo.jpg?quality=50" width="1080"><br>

#### 'https://vivisantosa.github.io/Unit-14-Javascript-and-DOM-Manipulation/index.html'

### Unit-14-Javascript-and-DOM-Manipulation
Author: Vivianti Santosa <br>
Date: 2020-08-26 <br>

The objective of this assignment is to use JavaScript, HTML, and CSS, and D3.js to create a dynamic table with a search function for specific values.  The table is based upon JavaScript object datasets, and needs to be able to be updated easily. 

## Part 1 : Automatic Table and Date Search
The part 1 of this assignment is to create a basic HTML web page with a table containing  UFO sighting dataset that is filterable for date/time of the sighting.<br>

The first task  is  creating codes that append the rows of table-body of the table  in  HTML  web page with the UFO dataset that come from aJavaScript object dataset. The separation of data file  and the HTML code file is constructed so that data should be able to be  updated easily in  the dataset file. The picture below shows the website with basic table displayed <br><br>
<img src="/Images/Single1.png" width="90%"><br>
<br>
The second task is to create a search function ( “filterSingleKey()”) in JavaScript that searches through the date/time column with an data type input from users,  finds rows that match user input, and returns a set of filtered data. As well as a “ displayTable(data);” function that cleans the table body and repopulates it with filtered data to display it in the HTML table. <br>
The last task is to write JavaScript code that will listen for “events” - the clicking of a button and perform the corresponding operations.  Beside the input box, we have two buttons FILTER TABLE and RESET TABLE that will respond to user's action.  <br>
FILTER TABLE : A “click” action will trigger the display function, which will prompt search function to generate filterSingleKey function to generate “filteredData” set that it subsequently display.<br>
RESET DATA :  A “click” action will trigger the display function to display the table with input from the base tableData.<br>
The picture below shows the website with a search result <br>
<br>
<img src="/Images/Single2.png" width="90%"><br>
<br>

## Part 2 : Multiple Search Categories
In part 2, the search function is modified so that user can to set multiple filters and search for UFO sightings using the following criteria (based on the table columns):<br>
- date/time
- city
- state
- country
- shape
<br>
To guide users in inserting the right input, we also create a select dropdowns menu with entry based on the dataset and updated when the base data-set is updated. <br>

### Dropdown menu
The first task in this part is to update the HTML page with more input boxes for other filter keys and make them “select” capable. <br>
We then created code that would filter the base table and create the list of distinct items for each search criteria. The result is attached to the HTML select code. 
The picture on the left below shows the updated website. <br>

<img src="/Images/Multi1.png" width="49%">    <img  align="right" src="/Images/Multi2.png" width="49%"><br>
<br>

### Multiple Keys Filter
The next task is to create a multiple filtering function ( “filterMultiKey()”) that is able to search more than one scratch criteria. The challenge for this task comes from when one or more of the input box is empty - when users want to search with only one or two search keys - a situation that the filtering process will result in an empty list. To mitigate that we create a function to create a list of only the filterKeys that is not empty ( “getFilteKey()”) . We use this list to iterate and perform the filtering task to generate the “filteredData” for the FILTER TABLE button. The picture above shows the resulting filter table on three search keys. <br>
The screenshoot below shows the "filterKeys" and “filteredData” from the search that we performed.

<img src="/Images/Screenshot (175).png" width="100%"><br>
