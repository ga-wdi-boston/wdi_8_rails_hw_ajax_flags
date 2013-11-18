var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {
		$.ajax({
	  	url: "/",
	  	data: {
	  		ajax: true,
	  		start: 70
	  	}
		}).done(function() {
	  	$( this ).addClass( "done" );
		});

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

