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
		FlagApp.$countriesDiv.empty();
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
	var $countryDiv = $('<div class="flag ' + country.abbreviation + '">' + '</div>' );
	var $countryLi = $('<li>' + country.name + ' (' + country.abbreviation + ') ' + '</li>');
	this.$countriesDiv.append($countryDiv);
	this.$countriesDiv.append($countryLi);
}

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
	FlagApp.$countriesDiv = $('#country-list');
});
