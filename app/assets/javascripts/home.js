var Flags = {
	showOne: function() {
		$('#countries-list').append();
	},
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {


	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);

	$.ajax({
		url: 'http://localhost:3000/countries.html',
		type: 'GET',
		dataType: 'html'
	})
	.done(function(data) {
		console.log(data);
		debugger
	})

}); //end document.ready()



