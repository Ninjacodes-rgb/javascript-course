const textBox = document.getElementById("textBox"); // fixed id
const toFahrenheit = document.getElementById("toFahrenheit"); // fixed id and typo
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert(event) {
    event.preventDefault(); // prevent form submission
    let temp = Number(textBox.value);

    if (toFahrenheit.checked) {
        let fahrenheit = temp * 9 / 5 + 32;
        result.textContent = `${fahrenheit.toFixed(2)} °F`;
    } else if (toCelcius.checked) {
        let celsius = (temp - 32) * 5 / 9;
        result.textContent = `${celsius.toFixed(2)} °C`;
    } else {
        result.textContent = "Select a unit";
    }
}

// Attach event listener to the form
document.querySelector("form").addEventListener("submit", convert);