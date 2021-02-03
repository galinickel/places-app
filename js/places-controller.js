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
}
function onRemoveMark(i) { 
    var marker = mapMarkers[i]
    mapMarkers.splice(i,1)
    marker.setMap(null);
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