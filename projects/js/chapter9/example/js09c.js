"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage
      Author: 
      Date:   
      
      Filename: js09c.js
 */

//array of key names
let keys = ["name", "email", "phone", "address", "city", "state", "zip", "allergies", "frequency", "size"];

for(let item of keys){
      let newRow = document.createElement("tr");
      //display key
      let keyCell = document.createElement("td");
      keyCell.textContent = item;
      newRow.appendChild(keyCell);
      //display key values
      let keyValue = document.createElement("td");
      keyValue.textContent = localStorage.getItem(item);
      newRow.appendChild(keyValue);

      //append row to table
      document.getElementById("prefTable").appendChild(newRow);
}

//remove preference from local storage with button click
document.getElementById("removePrefBtn").onclick = function(){
      for(let item of keys){
            localStorage.removeItem(item);
      }
}