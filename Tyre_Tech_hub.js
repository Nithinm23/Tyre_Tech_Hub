function calculateTKPH() {
    // Get the input values
    var meanLoad = parseFloat(document.getElementById("meanLoad").value);
    var awss = parseFloat(document.getElementById("awss").value);

    // Validate inputs
    if (isNaN(meanLoad) || isNaN(awss) || meanLoad <= 0 || awss <= 0) {
        alert("Please enter valid positive numbers for both Mean Load and AWSS.");
        return;
    }

    // Calculate TKPH
    var tkph = (meanLoad * awss) / 10;

    // Display the result
    document.getElementById("result").innerHTML = "TKPH: " + tkph.toFixed(2);
}

function resetForm() {
    document.getElementById("meanLoad").value = '';
    document.getElementById("awss").value = '';
    document.getElementById("result").innerHTML = '';
}
