"use strict";
/*
Student Name: Jacob Gruszewski
File Name: script.js
Date: June 12, 2024
Description: JavaScript file for portfolio website.
*/

//Hamburger menu function 
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: 
      Date:   

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);


function countdown() {
      let now = new Date();
      currentTime.textContent = now.toLocaleString();
      let newYear = new Date(2026, 4, 21);
      //let currentYear = now.getFullYear();
      //let nextYear = currentYear + 1;
      //newYear.setFullYear(nextYear);
      let timeDiff = newYear.getTime() - now.getTime();
      let daysLeft = timeDiff / (1000 * 60 * 60 * 24);
      let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
      let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
      let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
      

}
