// JavaScript Document

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.911154, lng: -87.636645},
          zoom: 10
        });
		
var marker = new google.maps.Marker({
    position: {lat: 41.911154, lng: -87.636645},
    map: map,
    title: 'Serene Spa',
	icon: 'images/mapicon.png'
  });

      }