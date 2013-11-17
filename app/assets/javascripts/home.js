var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
		var flagsLoaded = $('.f32').length;
		var flagsTotal  = $('.countries-container').data('total-countries'); // the data function reads data attributes out of the DOM
		$(window).scroll(function(){  
			if ($(window).scrollTop() == $(document).height() - $(window).height() && flagsLoaded < flagsTotal){ //scrollTop == how far you are scrolled down; doc height is the height of the page rendered at once. window height is the height ofthe window
				$.ajax({
					url: "", //my partial 
					data: { 
						start: flagsLoaded //hey start at flag twenty one dumbass
					}
				})
			}  
		});    
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

