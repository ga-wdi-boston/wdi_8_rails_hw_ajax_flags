var Flags = {

	loading: false,

	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {
		var loaded = $('.f32').length;
		var total = parseInt($('#countries').data('total-countries'));
		if (loaded < total && !Flags.loading) {
			Flags.loading = true;
			$.ajax({
		  	url: "/",
		  	data: {
		  		ajax: true,
		  		start: loaded
		  	}
			}).done(function(data) {
		  	$('#countries').append(data);
		  	Flags.loading = false;
			});
		}
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

