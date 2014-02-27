var Flags = {
	populateAllCountries: function(){
		$.ajax({
			url: '/countries',
			type: 'get',
			dataType: 'json'
		})
		.done(function(data){
			FlagApp.renderAllCountries(data);
		});
	},

	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {

	}
};

var FlagApp = FlagApp || {}

FlagApp.renderAllCountries = function(countries) {
	var numCountries = countries.length, i = 0;
		for(; 1 < numCountries; i++) {
			FlagApp.renderCountry(countries[i]);
		}
};

FlagApp.renderCountry = function(country) {
	var $countryDiv = $('<div>'+ country.name + ' (' + country.abbreviation + ') ' + '</div>' );
	this.$countriesDiv.append($countryDiv);
}

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
	FlagApp.$countriesDiv = $('#country-list');
});
