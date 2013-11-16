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
    $('#flags').clear
	},
	showMoreCountries: function() {


	},
	infiniteScroll: function() {
    if ($(window).scrollTop > ($(document).height() - $(window).height() - 50)) {
    	$.getScript($('countries'))
    }
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

