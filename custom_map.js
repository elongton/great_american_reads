




function initMap() {
  var uluru = {lat: 37.54227, lng: -77.443538};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });

  var contentString =
      '<div class="dialog">'+
        '<div class="dialog_text_div">'+
          '<h1 class="titleHeading">And Then There Were None</h1>'+
          '<h1 class="locationHeading">Location: 101 East Franklin Street</h1>'+
          '<h1 class="readerHeading">Reader: Patricia Parks</h1>'+
          '<div>'+
            '<div style="text-align: justify;">' +
              '<p style="padding-right: 10px;">Richmond Public Library was founded by civic-minded leaders in the early 1900s.  The establishment of a public library for Richmond residents took several tries.  Originally approached by Mr. Andrew Carnegie in 1901, community leaders and advocates founded the Richmond Public Library Association in 1905 and built support for a locally-funded library.</p>'+
            '</div>'+
          '</div>'+
        '</div>'+ //dialog_text_div
        '<div class="dialog_image_div">'+
          '<img src="img/book.jpg" style="" alt="book cover">' +
        '</div>'+ //dialog_image_div
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


  $( document ).ready(function() {
  //LINK LISTENERS
      $('#marker1').click(function() {
        infowindow.open(map, marker);
      });

  });


}
// '<div style="width: 15%; text-align: center;" class="">' +
//   '<img src="img/book.jpg" style="height: 100px;" alt="book cover">' +
// '</div>' +
