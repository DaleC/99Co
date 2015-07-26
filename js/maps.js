function initialize() {
  var mapOptions = {
    center: { lat: 1.3000, lng: 103.8000},
    zoom: 11
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);