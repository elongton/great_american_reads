function initMap() {
  var uluru = {lat: 37.54227, lng: -77.443538};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="padding-bottom: 5px; margin-bottom: 0;" class="firstHeading">Location: CrossRoads</h1>'+
      '<h2 id="secondHeading" style="padding-bottom: 5px; margin-bottom: 0;" class="secondHeading">And then there were none</h1>'+
      '<div id="bodyContent" style="display: flex; justify-content: center;">'+
      '<div style="width: 85%; text-align: justify;">' +
      '<p style="padding-right: 10px;">Richmond Public Library was founded by civic-minded leaders in the early 1900s.  The establishment of a public library for Richmond residents took several tries.  Originally approached by Mr. Andrew Carnegie in 1901, community leaders and advocates founded the Richmond Public Library Association in 1905 and built support for a locally-funded library.</p>'+
      '</div>'+
      '<div style="width: 15%; text-align: center;" class="">' +
      '<img src="img/book.jpg" style="height: 100px;" alt="book cover">' +
      '</div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
