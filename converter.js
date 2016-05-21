// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

var celRadio = document.getElementById("celsius");
var fahrRadio = document.getElementById("fahrenheit");
var input = document.getElementById("tempInput");
var outputDom = document.getElementById("tempOutput");
var tempButton = document.getElementById("tempBut");
var clearButton = document.getElementById("clearBut");


function toCelsius (input) {
  return ((5/9) * (input - 32)).toFixed(2);
}

function toFahrenheit (input) {
  return ((9/5) * (input + 32)).toFixed(2);
}

// Get a reference to the button element in the DOM

// This function should determine which conversion should
// happen based on which radio button is selected.


function determineConverter (clickEvent) {
  console.log("event", clickEvent);

  var temperature = parseFloat(input.value);

  if (celRadio.checked){
    document.getElementById("tempOutput").innerHTML =
      ("The temperature is " + toCelsius(temperature) + " Celsius");
  } else if (fahrRadio.checked){
      document.getElementById("tempOutput").innerHTML =
      "The temperature is " + toFahrenheit(temperature) + " Fahrenheit";
  }
};

// Assign a function to be executed when the button is clicked

tempInput.addEventListener("keypress", enter)
function enter (keypress) {
    if (keypress.which === 13) {
      determineConverter();
    }
};

tempButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearDOM);
// celRadio.addEventListener();
// fahrRadio.addEventListener();

