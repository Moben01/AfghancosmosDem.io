function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: 'roadmap',

    // How zoomed in you want the map to start at (always required)
    // zoom: 11,

    // The latitude and longitude to center the map (always required)
    // center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{ "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#8e8e8e" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#7f7f7f" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#bebebe" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#cbcbcb" }, { "weight": "0.69" }] }, { "featureType": "administrative.locality", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.government", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#b5d7ef" }, { "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }, { "lightness": "50" }, { "gamma": "1" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e4e4e4" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "saturation": "0" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#e4e4e4" }, { "lightness": "0" }, { "gamma": "1" }, { "saturation": "0" }] }, { "featureType": "road.local", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "hue": "#ff0000" }, { "saturation": "-100" }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#cbcbcb" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#f3f3f3" }, { "saturation": "0" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }]
  };

  // Display a map on the web page
  map = new google.maps.Map(document.getElementById("mapCanvasTwo"), mapOptions);
  map.setTilt(50);

  // Multiple markers location, latitude, and longitude
  var markers = [
    ['Hoboken, NJ, USA', 40.743992, -74.032364],
    ['Long Island City, Queens, NY, USA', 40.744678, -73.948540],
    ['Midwood, Brooklyn, NY, USA', 40.622581, -73.962799],
    ['Brooklyn Childrens Museum, museum, New York, United States', 40.67439655, -73.94404613465176],
    ['South Slope, neighbourhood, New York, United States', 40.6604004, -73.9944088],
    ['NewYork-Presbyterian Brooklyn Methodist Hospital, hospital, New York, United States', 40.667825449999995, -73.97914371327701]
  ];

  // Info window content
  var infoWindowContent = [
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/01.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Koh Samui, Thailand</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>'],
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/02.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Belle Mare, Mauritius</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>'],
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/03.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Balian Beach, Indonesia</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>'],
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/04.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Pantai Nyanyi, Indonesia</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>'],
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/05.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Koh Samui, Thailand</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>'],
    ['<a href="property-details.html" class="d-block info_content text-dark text-decoration-none">' +
      '<img src="assets/img/map/06.jpg" class="img-fluid mb-3 rounded-3 w-100" alt="">' +
      '<h5>Koh Samui, Thailand</h5>' +
      '<div class="text-warning mb-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>' +
      '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '<a href="#" class="directions-link"><i class="fa-solid fa-compass me-2"></i>Directions</a>' +
      '<a href="tel:+(123) 456-7890" class="directions-link ms-2"><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</a>' +
      '</a>']
  ];


  // image from external URL

  var myIcon = 'assets/img/map/marker.png';

  //preparing the image so it can be used as a marker
  //https://developers.google.com/maps/documentation/javascript/reference#Icon
  //includes hacky fix "size" to allow for wobble
  var catIcon = {
    url: myIcon,
  };


  // Add multiple markers to map
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Place each marker on the map  
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: catIcon,
      animation: google.maps.Animation.DROP,
      title: markers[i][0]
    });

    // Add info window to marker    
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Set zoom level
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
    this.setZoom(12);
    google.maps.event.removeListener(boundsListener);
  });

}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);