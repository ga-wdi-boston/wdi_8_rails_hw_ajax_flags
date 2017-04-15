var numCountries = 20;

var Flags = {

	populateAllCountries: function() {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		}).done(function(data){
			Flags.emptyCountries();
			var numOfCountries = 20, i = 0;
			for(i; i < numOfCountries; i++){
				Flags.renderCountry(data[i]);
			}
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
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		}).done(function(data){
			numCountries = numCountries + 20;
			Flags.renderCountries(data);
		});
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
	Flags.emptyCountries();
	var i = 0;
	for(i; i < numCountries; i++){
		Flags.renderCountry(countries[i]);
	}
}

Flags.renderCountry = function(country){
	if(country !== undefined){
		if (country.north_america === true){
			var $countryDiv = '<div class="north-america">Name:' + country.name + '</div><div>Abbr:' + country.abbreviation + '</div>';
					$countryDiv += '<span class="flag ' + country.abbreviation + '"></span>'
		} else {
			var $countryDiv = '<div>Name:' + country.name + '</div><div>Abbr:' + country.abbreviation + '</div>';
					$countryDiv += '<span class="flag ' + country.abbreviation + '"></span>'
		}
			this.$countriesDiv.append($countryDiv);

	}
}

Flags.emptyCountries = function(){
	this.$countriesDiv.empty();
}

