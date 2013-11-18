var Flags = {
	populateAllCountries: function() {
		$('.f32').show();
	},
	resetAllCountries: function() {
		$('.f32').hide();
	},
	showMoreCountries: function() {
		var i = 1;
		for (; i < 21;) {
			$('#flags:nth-child(' + i + ')').show();
			i += 1;
		}
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