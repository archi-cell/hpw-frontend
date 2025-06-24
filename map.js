// 🌍 Initialize the Map
var map = L.map('map').setView([36.7962, -119.9029], 15); // Fresno, CA Coordinates

// 🌍 Add Tile Layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 📍 Add Marker for the Address
var marker = L.marker([36.7962, -119.9029]).addTo(map);
marker.bindPopup("<b>3855 N. Bryan Ave, Fresno</b><br>California, USA").openPopup();

// 🎯 Open Google Maps for Directions
function openGoogleMaps() {
    window.open("https://www.google.com/maps/place/3855+N+Bryan+Ave,+Fresno,+CA+93723", "_blank");
}
