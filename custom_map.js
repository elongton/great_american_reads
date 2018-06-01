function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 37.5428458, lng: -77.442493}
  });

  var contentArray =[
    description1,
    description2,

  ]


  var infowindow1 = new google.maps.InfoWindow({
    content: contentArray[0]
  });
  var infowindow2 = new google.maps.InfoWindow({
    content: contentArray[1]
  });

  var markers = [];
  var locations = [
    [{lat: 37.54227, lng: -77.443538}, 'Main Branch', 'A'],
    [{lat: 37.5543459, lng: -77.4818177}, 'Belmont', 'B']
  ];
  function drop() {
    for (var i = 0; i < locations.length; i++) {
      addMarkerWithTimeout(locations[i][0], i * 200, locations[i][1], locations[i][2]);
    }//for
  }//function drop();
  drop();






  function addMarkerWithTimeout(position, timeout, title, label) {
    window.setTimeout(function() {
      var newMarker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        label: label,
        animation: google.maps.Animation.DROP
      })
      newMarker.addListener('click', function() {
        infowindow.open(map, newMarker);
      });
      markers.push(newMarker);
    }, timeout);
  }


/////////////////////////////////////////////////////////////
//////////////////////LINK LISTENERS/////////////////////////
/////////////////////////////////////////////////////////////
  $( document ).ready(function() {
      $('#marker1').click(function() {
        infowindow1.open(map, markers[0]);
      });
      $('#marker2').click(function() {
        infowindow2.open(map, markers[1]);
      });

  });


}//initMap()
