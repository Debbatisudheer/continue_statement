function validateAge() {
    var ageInput = document.getElementById("ageInput").value;
    var errorMessage = document.getElementById("errorMessage");

    // Check if the input is a valid integer
    if (isNaN(ageInput) || ageInput === "") {
        errorMessage.textContent = "Invalid input. Please enter a valid number.";
        return;
    }

    var age = parseInt(ageInput);

    // Check if the age is within the specified range
    if (age < 18 || age > 100) {
        errorMessage.textContent = "Invalid age. Please enter an age between 18 and 100.";
        return;
    }

    // If the input is valid, remove the error message
    errorMessage.textContent = "";

    // If the input is valid, display a success message
    alert("Valid age entered: " + age);
}