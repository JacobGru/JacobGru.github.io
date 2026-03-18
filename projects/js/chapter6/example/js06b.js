"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06b.js
 */

let subButton = document.getElementById("subButton");
subButton.addEventListener("click", validateName);
subButton.addEventListener("click", validateCard);
subButton.addEventListener("click", validateNumber);
subButton.addEventListener("click", validateMonth);
subButton.addEventListener("click", validateYear);
subButton.addEventListener("click", validateCVC);

function validateName() {
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Please enter the name on the card.");
   } else {
      cardName.setCustomValidity("");
   }
}

function validateCard() {
   let card = document.forms.payment.elements.credit[0];
   if (card.validity.valueMissing) {
      card.setCustomValidity("Please choose a credit card.");
   } else {
      card.setCustomValidity("");
   }
}

function validateNumber() {
   let cNum = document.getElementById("cardNumber");
   if (cNum.validity.valueMissing) {
      cNum.setCustomValidity("Please enter a credit card number.");
   } else if (cNum.validity.patternMismatch) {
      cNum.setCustomValidity("Please enter a valid credit card number.");
   } else if (luhn(cNum.value) === false) {
      cNum.setCustomValidity("Please enter a valid credit card number.");
   } else {
      cNum.setCustomValidity("");
   }
}

function validateMonth() {
   let month = document.getElementById("expMonth");
   if (month.selectedIndex === 0) {
      month.setCustomValidity("Please select the expiration month.");
   } else {
      month.setCustomValidity("");
   }
}

function validateYear() {
   let year = document.getElementById("expYear");
   if (year.selectedIndex === 0) {
      year.setCustomValidity("Please select the expiration year.");
   } else {
      year.setCustomValidity("");
   }
}

function validateCVC() {
   let card = document.querySelector('input[name="credit"]:checked').value;
   let cvc = document.getElementById("cvc");
   if (cvc.validity.valueMissing) {
      cvc.setCustomValidity("Please enter the CVC code.");
   } else if ((card === "amex" && !/^\d{4}$/.test(cvc.value))) {
      cvc.setCustomValidity("Please enter a 4-digit number.");
   } else if ((card !== "amex" && !/^\d{3}$/.test(cvc.value))) {
      cvc.setCustomValidity("Please enter a 3-digit number.");
   } else {
      cvc.setCustomValidity("");
   }
}











/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

