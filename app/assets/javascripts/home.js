var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
		var currentPage = 1;

		function checkScroll() {
		  if (nearBottomOfPage()) {
		    currentPage++;
		    new Ajax.Request('/countries.js?page=' + currentPage, {asynchronous:true, evalScripts:true, method:'get'});
		  } else {
		    setTimeout("checkScroll()", 250);
		  }
		}

		function nearBottomOfPage() {
		  return scrollDistanceFromBottom() < 150;
		}

		function scrollDistanceFromBottom(argument) {
		  return pageHeight() - (window.pageYOffset + self.innerHeight);
		}

		function pageHeight() {
		  return Math.max(document.body.scrollHeight, document.body.offsetHeight);
		}

		document.observe('dom:loaded', checkScroll);
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});