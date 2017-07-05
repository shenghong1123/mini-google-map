var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyBxcoRSUSKxeAQ6qV_2D5CovpUeC5UyToA';

$(function () {
  
  var DEFAULT_RADIUS = 1500;
  var DEFAULT_LAT = 32.878091;
  var DEFAULT_LNG = -117.227134;
  
  function initMap() {
    var map = new google.maps.Map($('#map')[0], {
      zoom: DEFAULT_ZOOM,
      center: {
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG
      }
    });
    
    var params = {
      'location': new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
      'radius': DEFAULT_RADIUS,
      'type': 'restaurant'
    };
    
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(params, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var current_infowindow;
        
        _.each(results, function(place) {
          var marker = new google.maps.Marker({
            position: {
              'lat': place.geometry.location.lat(),
              'lng': place.geometry.location.lng()
            },
            map: map
          });
          
          var infowindow_content = '<div id="content">' + '<h1 id="firstHeading" class="firstHeading">' + place.name + '</h1>' + '</div>';
          
          var infowindow = new google.maps.InfoWindow({
            content: infowindow_content
          });
          
          marker.addListener('click', function() {
            if (current_infowindow) {
              current_infowindow.close();
            }
            infowindow.open(map, marker);
            current_infowindow = infowindow;
          });
        });
      }
    });
  }
  
  initMap();
});
