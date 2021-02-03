let map;
let userMarkers = []

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
        if (userMarkers.length > 9) {
            alert('Too many marked locations. Please remove some before adding further!')
            return
        }
        addMarker(position)
        renderMarkersList(position)
    });
}
function addMarker(position) {
        let marker = new google.maps.Marker({
            position: position,
            map: map,
        })
    userMarkers.push({position: position, name: prompt('name')})
    console.log(userMarkers);
}
function renderMarkersList(pos) { 
    let elList = document.querySelector('.markers-list')
    elList.innerHTML = `<ul class="markers-ul">`
    userMarkers.forEach((coord,i) => elList.innerHTML += `<li class="btn btn-light">
    ${coord.name}
    </li>
    <span> Rename </span>
    <span onclick(onGoTo(${i}))> Go To </span>
    <span onclick="onRemoveMark(${i})"> Delete </span>`)
    elList.innerHTML += `</ul>`
    // elList.innerHTML+=`${pos.lat},${pos.lng}`
}

function onRemoveMark(i) { 
    userMarkers.splice(i,1)
    renderMarkersList()
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