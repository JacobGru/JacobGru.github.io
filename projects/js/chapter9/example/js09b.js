"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: 
      Date:   
      
      Filename: js09b.js
 */

// getting text string from bar
let qString = location.search.slice(1);
//replace the + sign with a space
qString = qString.replace(/\+/g, " ");
//replace all ui encoded characters
qString = decodeURIComponent(qString);

//split string into field=name pairs in an array
let formData = qString.split(/&/g);
for(let items of formData){
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];

      //make label for field name
      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      //make input control for field value
      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);
}
//console.log(qString);

//store everything in local storage when user clicks submit button
document.getElementById("signupBtn").onclick = function(){
      //data fields to save
      let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");
      //add each field and value to local storage
      for(let field of formFields){
            localStorage.setItem(field.name, field.value);
      }
      console.log(localStorage);
}