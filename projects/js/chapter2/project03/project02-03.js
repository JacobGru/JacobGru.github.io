/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Jacob
      Date:   10/16/25

      Filename: project02-03.js
 */

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("square").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the square";
  };
});

document.getElementById("square").onmouseout = function() {
document.getElementById("feedback").innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("triangle").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
  };
});

document.getElementById("triangle").onmouseout = function() {
document.getElementById("feedback").innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("circle").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the circle";
  };
});

document.getElementById("circle").onmouseout = function() {
document.getElementById("feedback").innerHTML = "";
};
