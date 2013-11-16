'use strict';

var Flags = {
	populateAllCountries: function() {
		// $.ajax({
  //     url: '/countries',
  //     dataType: 'script',
  //     success: function(script {
  //       script();
  //     });
		// });
	},
	resetAllCountries: function() {
    // $('#flags').clear
	},
	showMoreCountries: function() {


	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});