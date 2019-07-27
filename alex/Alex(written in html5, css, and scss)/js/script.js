////////////////////////// 
// google maps information
//////////////////////////
// Initialize and add the map
var map;

function initMap() {
    // The map, centered at place of work
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.7067, lng: -1.3164 },
        zoom: 14
    });
    // The marker, positioned at place of work
    var marker = new google.maps.Marker({
        position: {
            lat: 51.706770,
            lng: -1.314790
        },
        map: map
    });
}
// adds marker for position on map