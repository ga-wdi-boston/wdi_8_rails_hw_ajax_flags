var numCountries = 20;

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
			Flags.emptyCountries();
		});
	},
	showMoreCountries: function() {
		numCountries = numCountries + 20;
		Flags.populateAllCountries();
	},
	infiniteScroll: function() {
		var win = $(window);
		if(win.height() + win.scrollTop() >= $(document).height()) {
		  Flags.showMoreCountries();
		}
	}
};

$(document).ready(function() {
	Flags.$countriesDiv = $('#all_countries');
	Flags.populateAllCountries();
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

Flags.renderCountries = function(countries){
	Flags.emptyCountries(countries);
	var i = 0;
	for(i; i < numCountries; i++){
		Flags.renderCountry(countries[i]);
	}
}

Flags.renderCountry = function(country){
	var $countryDiv = '<div>Name:' + country.name + '</div><div>Abbr:' + country.abbreviation + '</div>';
	this.$countriesDiv.append($countryDiv);
}

Flags.emptyCountries = function(){
	this.$countriesDiv.empty();
}

