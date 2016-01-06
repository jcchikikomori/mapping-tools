	// Set map through var
	var map = L.map('map').setView([51.505, -0.09], 13);
	// Map tile and api
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	// IMPORTANT: Access Token
	accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ.XU68Bms5rZkYLVjYW0SZng'
	}).addTo(map);
	// Add other things
	var marker = L.marker([51.5, -0.09]).addTo(map);
	// Add a circle
	var circle = L.circle([51.508, -0.11], 500, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5
	}).addTo(map);
	// Add a polygon
	var polygon = L.polygon([
	    [51.509, -0.08],
	    [51.503, -0.06],
	    [51.51, -0.047]
	]).addTo(map);
	// Show popup when the objects clicked
	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");
	polygon.bindPopup("I am a polygon.");
	// Standalone popup in particular latitude
	var popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent("Welcome to mapping demo. You may see the source code for more detailed representation.")
	.openOn(map);