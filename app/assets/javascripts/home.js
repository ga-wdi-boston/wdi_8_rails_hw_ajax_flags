'use strict';

var Flags = {
	populateAllCountries: function() {
		$.getScript('/all');
	},
	resetAllCountries: function() {
    $('#flags').empty();
	},
	showMoreCountries: function() {
		$.ajax({
			url: $('.pagination .next_page').attr('href'),
			dataType: 'script',
			success: function(data) {
				console.log(data);
			}
	},

	infiniteScroll: function() {

 //  if ( $(window).scrollTop() > $(document).height() - $(window).height() - 50 ) {
 //  	$('#flags').load($('.pagination .next_page').attr('href'));
 //  }

	}


};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$('.pagination .next_page').click(function(e){
     e.preventDefault();
     Flags.showMoreCountries();
     });
	$(window).scroll(Flags.infiniteScroll);
});

