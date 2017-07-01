var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyBxcoRSUSKxeAQ6qV_2D5CovpUeC5UyToA';

function initMap() {
    var position = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map($('#map')[0], {
        zoom: DEFAULT_ZOOM,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        data: {
            'location': position.lat + ',' + position.lng,
            'type': 'restaurant',
            'key': GOOGLE_API_KEY,
            'radius': 500
        },
        success: function(data) {
            debugger;
        },
        failure: function(data) {
            debugger;
        }
    });
}