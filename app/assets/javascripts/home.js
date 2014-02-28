var Flags = {
	populateAllCountries: function() {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		}).done(function(data){
			Flags.renderCountries(data);
		});

	},
	resetAllCountries: function() {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		}).done(function(data){
			Flags.emptyCountries(data);
		});
	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	Flags.$countriesDiv = $('#all_countries');

	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

Flags.renderCountries = function(countries){
	var numCountries = countries.length, i = 0;
	for(i; i < numCountries; i++){
		Flags.renderCountry(countries[i]);
	}
}

Flags.renderCountry = function(country){
	var $countryDiv = $('<div>', {text: country.name});
	this.$countriesDiv.append($countryDiv);
}

Flags.emptyCountries = function(country){
	this.$countriesDiv.empty();
}
