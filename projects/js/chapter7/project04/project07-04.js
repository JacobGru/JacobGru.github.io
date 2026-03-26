"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: 
      Date:   

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status1 = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.addEventListener("click", function() {
    customers.push(customerName.value);
    generateCustomerList();
    status1.textContent = customerName.value + " added to the queue.";    
}); 

searchButton.addEventListener("click", function() {
   let place = customers.indexOf(customerName.value) + 1;
   if (place === 0) {
      status1.textContent = customerName.value + " is not in the queue.";
   } else {
      status1.textContent = customerName.value + " is in position " + place + " in the queue.";
   }
});

removeButton.addEventListener("click", function() {
   let index = customers.indexOf(customerName.value);
   if (index !== -1) {
      customers.splice(index, 1);
      generateCustomerList();
      status1.textContent = customerName.value + " removed from the queue.";
   } else {
      status1.textContent = customerName.value + " is not in the queue.";
   }
});

topButton.addEventListener("click", function() {
   let topCustomer = customers.shift();
   generateCustomerList();
   status1.textContent = topCustomer + " removed from the top of the queue.";
});