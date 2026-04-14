"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: 
      Date:   

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      let staff = JSON.parse(fr.result);
      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   
   //continue here
   // Create a for...in loop for the object stored in staff.directory[0]
for (let prop in staff.directory[0]) {
   // Create a <th> element for the property name
   let headerCell = document.createElement("th");
   
   // Store the property name as the cell's text content
   headerCell.textContent = prop;
   
   // Append the cell to the header row
   headerRow.appendChild(headerCell);
}
   // Append the header row to the table
   staffTable.appendChild(headerRow);

   // Create a for loop to iterate through the array stored in staff.directory
// Outer loop through the staff directory array
for (let i = 0; i < staff.directory.length; i++) {
    // 1. Create a table row element
    let tableRow = document.createElement("tr");

    // 2. Inner loop through the properties of the current staff entry
    for (let prop in staff.directory[i]) {
        // 3. Create a table cell (td) for each property value
        let tableCell = document.createElement("td");
        
        // 4. Set the cell text to the property value
        tableCell.textContent = staff.directory[i][prop];
        
        // 5. Append the cell to the row
        tableRow.appendChild(tableCell);
    }

    // 6. Append the finished row to the staffTable element
    staffTable.appendChild(tableRow);
}
   // Append the completed table to the containerBox element
   containerBox.appendChild(staffTable);


}