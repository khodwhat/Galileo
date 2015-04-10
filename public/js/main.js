(function() {
  $('.addNewCrop').on('click', function() {
    return $('.cropsForm').append($('.cropsForm').html());
  });

  $('#inputCropStartDate').datepicker();

  $('.select-crop').selectpicker();

  $("#searchLocation").geocomplete({
    map: "#map-canvas",
    location: [22.234376786, 55.23243456456],
    markerOptions: {
      draggable: true
    }
  });

  $("#searchLocation").bind("geocode:dragged", function(event, latLng) {
    return new google.maps.Geocoder().geocode({
      'latLng': latLng
    }, (function(_this) {
      return function(results, status) {
        return $("#searchLocation").val(results[0].formatted_address);
      };
    })(this));
  });

}).call(this);
