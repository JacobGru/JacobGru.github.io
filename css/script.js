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