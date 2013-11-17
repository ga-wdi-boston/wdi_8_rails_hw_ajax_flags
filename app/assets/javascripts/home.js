var Flags = {

	isLoading: false,

	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() { 
		var atBottom = $(window).scrollTop() == $(document).height() - $(window).height();
		var flagsLoaded = $('.f32').length;
		var flagsTotal  = $('.countries-container').data('total-countries'); // the data function reads data attributes out of the DOM

		if (atBottom && flagsLoaded < flagsTotal && !Flags.isLoading) { //scrollTop == how far you are scrolled down; doc height is the height of the page rendered at once. window height is the height ofthe window

			Flags.isLoading = true;

			$.ajax({
				url: "/", //my partial 
				data: { 
					start: flagsLoaded   //hey start at flag twenty one dumbass. This is what to change, i thin
				}
			}).done(function(data){
					$('.countries-container').append(data);
					Flags.isLoading = false;
			}); //this is called when you are done loading data

		}   
	},
	init: function() { //nested anon function as an event handler
		$('#populate-all-button').click(Flags.populateAllCountries);
		$('#reset-button').click(Flags.resetAllCountries); //my comments are strange
		$('#show-more-countries-button').click(Flags.showMoreCountries); //the sexy $('') thing is the selector
		$(window).scroll(Flags.infiniteScroll); //scroll binding. and event handler is a function that is called when an event fires
	}
};

$(document).ready(Flags.init);

