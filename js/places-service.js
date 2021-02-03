let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 29.55805,
            lng: 34.94821
        },
        zoom: 14,
    });
    map.addListener("click", (mapsMouseEvent) => {
        let position = {
            lat: mapsMouseEvent.latLng.lat(),
            lng: mapsMouseEvent.latLng.lng()
        }
        console.log(position);
    });
}

function getLocation(ev) {
    console.log(ev);
}

function onGetUserLocation() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocationOnMap, handleLocationError);

}

function showLocationOnMap(position) {
    console.log(position.coords);
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))

}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}