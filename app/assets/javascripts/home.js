// var Flags = {
// 	populateAllCountries: function() {


// 	},
// 	resetAllCountries: function() {

// 	},
// 	showMoreCountries: function() {

// 	},
// 	infiniteScroll: function() {

// 	}
// };

// $(document).ready(function() {
// 	$('#populate-all-button').click(Flags.populateAllCountries);
// 	$('#reset-button').click(Flags.resetAllCountries);
// 	$('#show-more-countries-button').click(Flags.showMoreCountries);
// 	$(window).scroll(Flags.infiniteScroll);
// });

var Flags = Flags || {};

$(document).ready(function() {
	Flags.countriesDiv = $('#all-countries');
	$('#populate-all-button').click(Flags.populateAllCountries);

}); // end ready

Flags.populateAllCountries = function() {
	event.preventDefault();

	$.ajax({
		url: '/countries',
		type: 'GET',
		dataType: 'JSON'
	}) // end ajax request
	.done(function(data) {
		Flags.renderAllCountries(data);
	}); // end done

	return false;
}; // end populateAllCountries

Flags.renderCountry = function(country) {
	var countryDiv = '<div id=' + country.id + '>' +
											country.name +
											' (' + country.abbreviation.toUpperCase() + ') ' +
											"flag will go here";
	Flags.countriesDiv.append(countryDiv);
}; // end renderCountry

Flags.renderAllCountries = function(countries) {
	var i = 0, j = countries.length;
	for (i; i < j; i = i + 1) {
		Flags.renderCountry(countries[i]);
	}; // end for loop
}; // end renderAllCountries
