function renderMarkersList(pos) {
    let elList = document.querySelector('.markers-list')
    elList.innerHTML = `<ul class="markers-ul">`
    mapMarkers.forEach((arrItem, i) => elList.innerHTML += `<li class="btn btn-light">
    ${arrItem.name}
    </li>
    <span onclick="onRename(${i})"> Rename </span>
    <span onclick="onGoTo(${i})"> Go To </span>
    <span class ="btn btn-danger" onclick="onRemoveMark(${i})"> Delete </span>`)
    elList.innerHTML += `</ul>`
}

function onRename(i) {
    var marker = mapMarkers[i]
    marker.name = prompt('New name?')
    renderMarkersList()
}

function onGoTo(i) {
    var coord = {
        coords: {
            latitude: mapMarkers[i].position.lat(),
            longitude: mapMarkers[i].position.lng()
        }
    }
    console.log(coord);
    showLocationOnMap(coord)
}

function onRemoveMark(i) {
    var marker = mapMarkers[i]
    mapMarkers.splice(i, 1)
    marker.setMap(null);
    renderMarkersList()
}

function onGetUserLocation() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocationOnMap, handleLocationError);

}