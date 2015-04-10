
# initMap = () ->
#   mapOptions = 
#     center: {lat: 22.234376786, lng: 55.23243456456}
#     zoom: 3

#   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

# zoomMap = () ->
#   selectedCity= $("#cities-select").val()
#   if _.contains CONFIG.supportedCountries.Egypt.cities, selectedCity
#     myLatlng = new google.maps.LatLng(30.0594885,31.2584644)
#   else
#     myLatlng = new google.maps.LatLng(25.073858,55.2298444)
  
#   map.setZoom(8)
#   map.setCenter(myLatlng);

# _createMarker = (data, color) ->
#   coords = new google.maps.LatLng(data.location.lat, data.location.lng);
#   marker = new google.maps.Marker
#     position: coords
#     map: map
#     title: "Brand: #{data.brandName}, Store: #{data.storeName}, Product: #{data.productName}"
#     icon: "http://maps.google.com/mapfiles/ms/icons/#{color}-dot.png"

#     setTimeout () ->
#     marker.setMap(null);
#   , 5000 
$('.addNewCrop').on 'click', ->
  $('.cropsForm').append($('.cropsForm').html());
$('#inputCropStartDate').datepicker()
$('.select-crop').selectpicker()
$("#searchLocation").geocomplete
  map: "#map-canvas"
  location: [22.234376786, 55.23243456456]
  markerOptions:
    draggable: true
$("#searchLocation").bind "geocode:dragged", (event, latLng) ->
  new google.maps.Geocoder()
  .geocode {'latLng': latLng}, (results, status) =>
    $("#searchLocation").val results[0].formatted_address


# google.maps.event.addDomListener(window, 'load', initMap);
