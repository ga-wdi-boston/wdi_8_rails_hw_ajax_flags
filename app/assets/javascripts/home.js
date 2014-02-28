var Flags = {
	showSomething: function(data) {
 		var $data = data,
 				$countries_list = $('countries-list'),
 				$one = $('#one');

 		$countries_list.append($one);
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
		url: '/countries',
		type: 'GET',
		dataType: 'html'
	})
	.done(function(data) {
		console.log(data);
		Flags.showSomething(data);
		debugger
	})

}); //end document.ready()



