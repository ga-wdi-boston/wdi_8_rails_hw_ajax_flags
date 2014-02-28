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
	Flags.loadCount = 0;

	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.loadNext20Countries);

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

Flags.resetAllCountries = function() {
	event.preventDefault();
	Flags.countriesDiv.empty();
	return false;
}; // end resetAllCountries

Flags.loadNext20Countries = function() {
	event.preventDefault();

	$.ajax({
		url: '/countries',
		type: 'GET',
		dataType: 'JSON'
	}) // end ajax request
	.done(function(data) {
		Flags.renderNext20Countries(data);
	}); // end done

	return false;
}; // end loadNext20Countries

Flags.renderCountry = function(country) {
	var countryDiv = '<div id=' + country.id + '>' +
											country.name +
											' (' + country.abbreviation.toUpperCase() + ') ' +
											'<span class="flag ' + country.abbreviation + '"></span>';
	Flags.countriesDiv.append(countryDiv);
}; // end renderCountry

Flags.renderAllCountries = function(countries) {
	var i = 0, j = countries.length;
	for (i; i < j; i = i + 1) {
		Flags.renderCountry(countries[i]);
	}; // end for loop
}; // end renderAllCountries

Flags.renderNext20Countries = function(countries) {

	var i = Flags.loadCount,
			length = Flags.loadCount + 20;

	for (i; i < length; i = i + 1) {
		Flags.renderCountry(countries[i]);
	}; // end for loop

		Flags.loadCount = Flags.loadCount + 20;





		// var length = 20,
		// 		i = 20 * (Flags.loadCount - 1);

		// for (i; i < length; ) {
		// 	if ( !countries[i] ) {
		// 		return false;
		// 	}
		// 	Flags.renderCountry(countries[i]);
		// 	i = i + 1;
		// }

		// Flags.loadCount = Flags.loadCount + 1;

}; // end renderNext20Countries
