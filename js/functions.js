;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {
		function heroBackground() {
			var bgImg = $('.hero-section img').attr('src');

			$('.hero-section').css({
				'background-image': 'url(' + bgImg + ')',
				'background-size': 'cover'
			});
		}

		heroBackground();
	});

})(jQuery, window, document);
