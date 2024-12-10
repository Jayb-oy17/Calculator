/** @format */

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = ""; // To store the current input
  let operatorPressed = false; // To prevent multiple operators

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      // Clear the display
      if (button.id === "clear") {
        currentInput = "";
        result.value = "";
        operatorPressed = false;
      }
      // Calculate result
      else if (button.id === "equals") {
        try {
          currentInput = eval(currentInput.replace("÷", "/").replace("×", "*"));
          result.value = currentInput;
        } catch (error) {
          result.value = "Error";
        }
      }
      // Prevent multiple operators
      else if (button.classList.contains("operator")) {
        if (!operatorPressed && currentInput !== "") {
          currentInput += value;
          result.value = currentInput;
          operatorPressed = true;
        }
      }
      // Append numbers and decimal points
      else {
        currentInput += value;
        result.value = currentInput;
        operatorPressed = false;
      }
    });
  });
});
