function calculateTKPH() {
    // Get the input values from the user
    var emptyLoad = parseFloat(document.getElementById("emptyLoad").value);
    var loadedLoad = parseFloat(document.getElementById("loadedLoad").value);
    var operatingHours = parseFloat(document.getElementById("operatingHours").value);
    var cyclesPerDay = parseFloat(document.getElementById("cyclesPerDay").value);
    var distancePerCycle = parseFloat(document.getElementById("distancePerCycle").value);

    // Validate inputs to ensure they are positive numbers
    if (isNaN(emptyLoad) || isNaN(loadedLoad) || isNaN(operatingHours) || 
        isNaN(cyclesPerDay) || isNaN(distancePerCycle) || 
        emptyLoad <= 0 || loadedLoad <= 0 || operatingHours <= 0 || cyclesPerDay <= 0 || distancePerCycle <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate Average Load
    var averageLoad = (emptyLoad + loadedLoad) / 2;

    // Calculate Average Speed (km/h)
    var averageSpeed = (distancePerCycle * cyclesPerDay) / operatingHours;

    // Calculate TKPH
    var tkph = averageSpeed * (averageLoad / 1000); // Convert kg to tonnes

    // Display the results
    document.getElementById("result").innerHTML = `
        Average Load: ${averageLoad} kg (${(averageLoad / 1000).toFixed(2)} tonnes)<br>
        Average Speed: ${averageSpeed.toFixed(2)} km/h<br>
        TKPH: ${tkph.toFixed(2)}<br>
    `;
}

function resetForm() {
    // Reset all input fields to empty
    document.getElementById("emptyLoad").value = '';
    document.getElementById("loadedLoad").value = '';
    document.getElementById("operatingHours").value = '';
    document.getElementById("cyclesPerDay").value = '';
    document.getElementById("distancePerCycle").value = '';
    // Clear the result display
    document.getElementById("result").innerHTML = '';
}
