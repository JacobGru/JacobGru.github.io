"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: 
      Date:   

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
};

function Ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

/* Add the moveWithin() method to the Ball prototype */
Ball.prototype.moveWithin = function(container) {
   // Use an anonymous function to handle the movement and collision logic
   (function() {
      // 1. Set current ball boundaries based on current position and radius
      let ballTop = this.yPos;
      let ballLeft = this.xPos;
      let ballBottom = this.yPos + this.radius;
      let ballRight = this.xPos + this.radius;

      // 2. Vertical bounce logic
      if (ballTop < 0 || ballBottom > container.height) {
         // Optionally "shake" the container by updating its position
         container.yPos += this.yVelocity; 
         // Reverse vertical velocity
         this.yVelocity = -this.yVelocity;
      }

      // 3. Horizontal bounce logic
      if (ballLeft < 0 || ballRight > container.width) {
         // Optionally "shake" the container by updating its position
         container.xPos += this.xVelocity;
         // Reverse horizontal velocity
         this.xVelocity = -this.xVelocity;
      }

      // 4. Update the ball's position within the container
      this.yPos += this.yVelocity;
      this.xPos += this.xVelocity;
      
   }).call(this); // Use .call(this) so 'this' inside refers to the ball object
};




/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   let newBall = new Ball(BALL_RADIUS);
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.yVelocity = rand(-10, 10);
   newBall.xVelocity = rand(-10, 10);

   // Use setInterval to move the ball every 25 milliseconds
   setInterval(function() {
      newBall.moveWithin(box);
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
   }, 25);

};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}