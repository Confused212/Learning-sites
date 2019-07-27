////////////////////////// 
// google maps information
//////////////////////////
// Initialize and add the map

var map;

function initMap() {
    // The map, centered at place of work
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.8245, lng: -1.3904 },
        zoom: 14
    });
    // The marker, positioned at place of work
    var marker = new google.maps.Marker({
        position: {
            lat: 51.824510,
            lng: -1.390410
        },
        map: map
    });
}