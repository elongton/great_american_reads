//////////////////////////////////////////////////////////////////////////
/////////////////////////LABEL ARRAY DEFINITION///////////////////////////
///////////////////////ADD DESCRIPTION EACH TIME//////////////////////////
//////////////////////////////////////////////////////////////////////////
infoArray = []
var contentArray =[
  description1,
  description2,
]
//////////////////////////////////////////////////////////////////////////
////////////////////////MARKER ARRAY DEFINITION///////////////////////////
//////////////////////////ADD MARKER EACH TIME////////////////////////////
//////////////////////////////////////////////////////////////////////////

var markers = [];
var locations = [
  [{lat: 37.54227, lng: -77.443538}, 'Main Branch', 'A'],
  [{lat: 37.5543459, lng: -77.4818177}, 'Belmont', 'B']
];


//////////////////////////////////////////////////////////////////////////
/////////////////////DO NOT TOUCH ANY OF THE BELOW////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////




function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 37.5428458, lng: -77.442493}
  });

for (var j = 0; j < contentArray.length; j++){
  infoArray.push(new google.maps.InfoWindow({
                      content: contentArray[j]
                    })
                )
  }//for var j

  function drop() {
    for (var i = 0; i < locations.length; i++) {
      addMarkerWithTimeout(locations[i][0], i * 200, locations[i][1], locations[i][2], i);
    }//for
  }//function drop();
  drop();

  function addMarkerWithTimeout(position, timeout, title, label, iterator) {
    window.setTimeout(function() {
      var newMarker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        label: label,
        animation: google.maps.Animation.DROP
      })
      newMarker.addListener('click', function() {
        infoArray[iterator].open(map, newMarker);
      });
      markers.push(newMarker);
    }, timeout);
  }


  $( document ).ready(function() {
    for (k=0; k < locations.length; k++){
      $('#marker'+String(k+1)).click(function() {
        infoArray[k].open(map, markers[k]);
      });
    }
  });
}//initMap()
