var Flags = {
	populateAllCountries: function() {
		$('#country').show();
	},
	resetAllCountries: function() {
		$('#country').hide();
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
});


	// $.ajax({
	// 	url:"flags32.css.scss",
	// 	success:function(data){
	// 		 $("<style></style>").appendTo("head").html(data);
	// 	}
	// })

//add a class for .f32 and country code and add it to the countries?

//stack overflow infinite scroll ex
// var win = $(window),
//     doc = $(document);

// win.scroll(function(){
//     if( win.scrollTop() > doc.height() - win.height() ) {
//         $("#load-more").click();
//     }
// }).scroll();



