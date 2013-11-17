/*globals $*/
'use strict';


var Flags = {
	renderFlags: function(json) {
    var country;
    for (var i = 0; i < json.length ;  i ++) {
      country = json[i];
      $('<div class="country" id=' + country.id + '>' +
      '<div class="flag ' + country.abbreviation + '"></div>' +
      '<div class="country-name" id="' + country.id + '">' + country.name + '</div>' +
      '</div>').appendTo('#flags');
    }
	},

	populateAllCountries: function() {
      var offset = $('#flags .country').length || 0;
      $.ajax({
      url: '/all',
      data: {offset: offset},
      dataType: 'json',
      success: function(data) {
        Flags.renderFlags(data);
      }
    });
	},

	resetAllCountries: function() {
    $('#flags').empty();

	},
	showMoreCountries: function() {
    var step = 20,
      offset = $('#flags .country').length || 0;

		$.ajax({
			url: '/countries/' + step + '/' + offset,
			dataType: 'json',
			success: function(data) {
				Flags.renderFlags(data);
			}
    });
	},

	infiniteScroll: function() {

 //  if ( $(window).scrollTop() > $(document).height() - $(window).height() - 50 ) {
 //  	showMoreCountries();
 //  }

	}


};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

