$(document).ready(function() {
	Flags.$countriesDiv = $('#all-countries');
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
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
	  	Flags.renderCountry(data[i]);
		};
	})
	.fail(function() {
		console.log("error");
	})
};

Flags.renderCountry = function(country) {
	if(country !== undefined) {
		var countryDiv = '<div data-bool= ' + country.north_america  + ' id='+ country.id +'>';
			  countryDiv += ' Name: ' + country.name + ' Abbreviation: ' + country.abbreviation;
			  countryDiv += '<span class="flag ' + country.abbreviation + '"></span>'
			  countryDiv += '</div>'
		Flags.$countriesDiv.append(countryDiv);
	};
};

Flags.resetAllCountries = function() {

};

Flags.showMoreCountries = function() {

};

Flags.infiniteScroll = function() {
	var win = $(window);
  // Infinite scroll math!
  if(win.height() + win.scrollTop() >= $(document).height()) {
    showMoreCountries();
  };
};
