var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
	// 	 $(document).infiniteScroll({
 //        bottomPixels: 50,
 //        fireDelay: 10,
 //        callback: function(i) {
 //          var last_img = $(".flag:nth-child(20)");
 //          last_img.after(last_img.prev().prev().prev().prev().prev().prev().clone());
 //        }
 //      });

	// }
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

