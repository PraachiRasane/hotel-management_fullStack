// Coordinates of the hotel
const hotelLatitude = 12.9716;  // Replace with your hotel’s latitude
const hotelLongitude = 77.5946; // Replace with your hotel’s longitude

// Function to calculate distance using the Haversine formula
function calculateDistance() {
    // Check if geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;
            const distance = getDistanceFromLatLonInKm(hotelLatitude, hotelLongitude, userLatitude, userLongitude);
            
            // Display the map and distance result
            document.getElementById('mapContainer').style.display = 'block';
            document.getElementById("distanceBtn").style.display = "none";
            document.getElementById('distanceResult').innerText = `You are ${distance.toFixed(2)} km away from the hotel.`;
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Haversine formula to calculate the distance in kilometers
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

// Helper function to convert degrees to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
