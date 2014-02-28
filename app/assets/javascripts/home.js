var Flags = {
	populateAllCountries: function() {
		$('.f32').show();
	},
	resetAllCountries: function() {
		$('.f32').hide();
	},
	showMoreCountries: function() {
		Flags.resetAllCountries();
		var i = 5;
		for (; i < 25;) {
			$('.f32:nth-child(' + i + ')').show();
			i += 1;
		}
	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	$('#show-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-twenty-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});
