function renderMarkersList(pos) {
    let elList = document.querySelector('.markers-list')
    console.log(elList.innerHTML);
    if (!mapMarkers.length) { 
        elList.innerHTML = `<div class="text-container">
        <h5>Find and manage your favorite locations!</h5>
        <p class="text-muted ">
            Nothing here? Add something new!
        </p>
    </div>`
return
    }
    elList.innerHTML = `<ul class="markers-ul">`
    mapMarkers.forEach((arrItem, i) => elList.innerHTML += `<li class="btn btn-light">
    ${arrItem.name}
    </li>
    <span class="buttons">
    <span class ="btn btn-info btn-markerList" onclick="onRename(${i})"> <i class="fas fa-edit"></i>

    </span>
    <span class ="btn btn-success btn-markerList" onclick="onGoTo(${i})"><i class="fas fa-map-marker-alt"></i>

    </span>
    <span class ="btn btn-danger btn-markerList" onclick="onRemoveMark(${i})"> <i class="far fa-trash-alt"></i>

    </span></span>`)
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