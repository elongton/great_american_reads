//////////////////////////////////////////////////////////////////////////
/////////////////////////LABEL ARRAY DEFINITION///////////////////////////
///////////////////////ADD DESCRIPTION EACH TIME//////////////////////////
//////////////////////////////////////////////////////////////////////////
infoArray = []
var contentArray =[
  description7_4,  //0
  description7_5,  //1
  description7_7,  //2
  description7_8,  //3
  description7_10,  //4
  description7_14,  //5
  description7_18,  //6
  description7_20,  //7
  description7_20_2,  //7_2
  description7_21,  //8
  description7_24,  //9
  description8_5,  //10
  description8_17,  //11
  description9_19,  //12
]
//////////////////////////////////////////////////////////////////////////
////////////////////////MARKER ARRAY DEFINITION///////////////////////////
//////////////////////////ADD MARKER EACH TIME////////////////////////////
//////////////////////////////////////////////////////////////////////////

var markers = [];
var locations = [
  [{lat: 37.5428458, lng: -77.442493}, 'WCVE', '7/24'], //0
  [{lat: 37.6014322, lng: -77.5491791}, 'WCVE', '7/5'], //1
  [{lat: 37.5440581, lng: -77.4619352}, 'WCVE', '7/7'], //2
  [{lat: 37.5581836, lng: -77.4682386}, 'WCVE', '7/8'], //3
  [{lat: 37.5440581, lng: -77.4619352}, 'WCVE', '7/10'], //4
  [{lat: 37.5362725, lng: -77.4778874}, 'WCVE', '7/14'], //5
  [{lat: 37.568638, lng: -77.4715192}, 'WCVE', '7/18'], //6
  [{lat: 37.5501729, lng: -77.4779747}, 'WCVE', '7/20'], //7
  [{lat: 37.5501729, lng: -77.4779747}, 'WCVE', '7/20_2'], //7_2
  [{lat: 37.5428458, lng: -77.442493}, 'WCVE', '7/21'], //8
  [{lat: 37.5428458, lng: -77.442493}, 'WCVE', '7/24'], //9
  [{lat: 37.7350508, lng: -77.1143805}, 'WCVE', '8/5'], //10
  [{lat: 37.5241297, lng: -77.4409174}, 'WCVE', '8/17'], //11
  [{lat: 37.4979658, lng: -77.4667912}, 'WCVE', '9/19'], //12
];






//////////////////////////////////////////////////////////////////////////
/////////////////////DO NOT TOUCH ANY OF THE BELOW////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
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


  ///CREATED MY FIRST CLOSURE!//
  function createCallback( i ){
    return function(){
      //close all other dialogs
      for (j=0; j<locations.length; j++){
        infoArray[j].close();
      }
      //open clicked dialog
      infoArray[i].open(map, markers[i]);
    }
  }
//closes all open dialogs on window click
  google.maps.event.addListener(map, "click", function(event) {
      for (var i = 0; i < infoArray.length; i++ ) {  //I assume you have your infoboxes in some array
           infoArray[i].close();
      }
  });

//jquery to help with clicking
  $( document ).ready(function() {
    for (k=0; k < locations.length; k++){
      $('#marker'+String(k)).click(createCallback(k));
    }
  });



}//initMap()
