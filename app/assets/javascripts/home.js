var Flags = {
	populateAllCountries: function() {
		$('.f32').show();
	},
	resetAllCountries: function() {
		$('.f32').hide();
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