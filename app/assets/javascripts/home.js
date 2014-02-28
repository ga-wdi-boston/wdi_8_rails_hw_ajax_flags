$(document).ready(function() {
	Flags.$countriesDiv = $('#all-countries');
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
	Flags.countriesShown = 0;

	// $.ajax({
	// 	url: '/countries',
	// 	type: 'GET',
	// 	dataType: 'json'
	// })
	// .done(function(data) {
	// 	var numCountries = data.length, i = 0;
	// 	for(i; i < 21; i++) {
				// Flags.countriesShown += 1
	//   	Flags.renderCountry(data[i]);
	// 	};
	// })
	// .fail(function() {
	// 	console.log("error");
	// })
});

var Flags = Flags || {};

Flags.populateAllCountries = function(countries) {

	$.ajax({
		url: '/countries',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		var numCountries = data.length, i = 0;
		for(i; i < numCountries; i++) {
			Flags.countriesShown += 1;
	  	Flags.renderCountry(data[i]);
		};
	})
	.fail(function() {
		console.log("error");
	})
};

Flags.renderCountry = function(country) {
	if(Flags.$countriesDiv) {
		var countryDiv = '<div data-bool= ' + country.north_america  + ' id='+ country.id +'>';
			  countryDiv += ' Name: ' + country.name + ' (' + country.abbreviation + ')';
			  countryDiv += '<span class="flag ' + country.abbreviation + '"></span>'
			  countryDiv += '</div>'
		Flags.$countriesDiv.append(countryDiv);
	};
};

Flags.resetAllCountries = function() {
	Flags.$countriesDiv.empty();
};

Flags.showMoreCountries = function(start, limit) {
	$.ajax({
		url: '/countries',
		type: 'GET',
		dataType: 'json',
		data: {offset: start, limit: limit},
	})
	.done(function(data) {
		Flags.populateAllCountries(data);
	})
	.fail(function() {
		console.log("error");
	})
};

Flags.infiniteScroll = function() {
	var win = $(window);
  if(win.height() + win.scrollTop() >= $(document).height()) {
    Flags.showMoreCountries(Flags.countriesShown, 20);
  };
};
