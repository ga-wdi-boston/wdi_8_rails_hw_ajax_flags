var Flags = {
	populateAllCountries: function() {

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
	$('#show-all-btn').click(Flags.populateAllCountries);
	$('#reset-btn').click(Flags.resetAllCountries);
	$('#show-twenty-more-btn').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});