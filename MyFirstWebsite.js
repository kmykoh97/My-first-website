// JavaScript source code

function initMap() {
  var uluru = {lat: 3.0243783, lng: 101.74252999999999};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
