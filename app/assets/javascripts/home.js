'use strict';

var Flags = {
	populateAllCountries: function() {
		$.getScript('/all');
	},
	resetAllCountries: function() {
    $('#flags').empty();
	},
	showMoreCountries: function() {
		$.getScript($('.pagination .next_page').attr('href'));
	},
	infiniteScroll: function() {
    if ( $(window).scrollTop() > $(document).height() - $(window).height() - 50 ) {
    	$.getScript($('.pagination .next_page').attr('href'));
    }
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

