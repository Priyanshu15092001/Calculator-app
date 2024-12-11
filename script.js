// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operatorPressed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "DEL") {
      // Delete the last character
      currentInput = currentInput.slice(0, -1) || "0";
    } else if (value === "RESET") {
      // Reset the display
      currentInput = "0";
    } else if (value === "=") {
      // Evaluate the expression
      try {
        currentInput = eval(currentInput) || "0";
      } catch {
        currentInput = "Error";
      }
    } else {
      // Append numbers and operators
      if (currentInput === "0" && !isNaN(value)) {
        currentInput = value; // Replace 0 with the number
      } else {
        currentInput += value;
      }
    }

    // Update the display
    display.textContent = currentInput;
  });
});
