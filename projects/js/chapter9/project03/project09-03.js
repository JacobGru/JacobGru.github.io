"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if (localStorage.getItem("sbloggerVisit")) {
   // Retrieve value from local storage and save it to storedLastDate
   let storedLastDate = localStorage.getItem("sbloggerVisit");

   // Display storedLastDate as the text content of the lastVisitDate object
   document.getElementById("lastVisitDate").textContent = storedLastDate;

   // Declare lastDate as a new Date object using the storedLastDate value
   let lastDate = new Date(storedLastDate);

   for (let item of articleDates) {
    // Declare the articleDate variable containing the date text of the current item
    let articleDate = new Date(item.textContent);

    // If articleDate is greater than lastDate, add "<strong>new</strong>" to the item's content
    if (articleDate > lastDate) {
        item.innerHTML += "<strong>new</strong>";
    }
}
} else if (!localStorage.getItem("sbloggerVisit")) {
      lastVisitDate.textContent = "Welcome to SBlogger!";

      for (let dateItem of articleDates) {
            dateItem.innerHTML += "<strong>new</strong>";
      }
}
// Declare the currentDate variable and store a Date object for 9/12/2024
const currentDate = new Date("9/12/2024");

// Apply toLocaleDateString() and store the string in the sbloggerVisit key of local storage
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());




