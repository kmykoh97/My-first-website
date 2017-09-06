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

/*Jquery in Javascript source code*/
var main = function() {
  $('.wholeList').hide();
  $('.wholeList').fadeIn(1000);

  $('.list').hide();
  $('.headList').on('click', function() {
    /*$(this).next().toggle();*/
	$(this).next().slideToggle(400);
    /*$(this).toggleClass('jquerycss');*/
    $(this).text('Press to view again');
  });

  $('.myButton').hide();
  $('#addMe').on('click', function() {
  	  $(this).next().slideToggle(400);
	  $(this).text('Press the links to visit');
  })
}
$(document).ready(main);

VAR 
