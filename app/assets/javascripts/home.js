var Flags = {
	populateAllCountries: function(e) {
		$('.f32').show();
	},
	resetAllCountries: function(e) {
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
	showSelectedCountry: function(e) {
		var nation = $('#country-name-field').val();
		$('#country-name-field').val('');
		e.preventDefault();
		Flags.resetAllCountries();
		$('.f32:contains(' + nation + ')').show();
	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	$('#show-all-btn').click(Flags.populateAllCountries);
	$('#reset-btn').click(Flags.resetAllCountries);
	$('#show-twenty-more-btn').click(Flags.showMoreCountries);
	$('#find-flag-btn').click(Flags.showSelectedCountry);
	$(window).scroll(Flags.infiniteScroll);
});