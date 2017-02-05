;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {
		function heroBackground() {
			var bgImg = $('.hero-section img').attr('src');

			$('.hero-section').css({
				'background': 'url(' + bgImg + ') no-repeat center center',
				'background-size': 'cover'
			});
		}

		//mobile-select
		function selectValue() {		
			var selectVal = $('.select-holder select option').eq(0).val();
			$('.select-holder span').text(selectVal);

			$('.search-holder select').on('change', function() {
				var $this = $(this);
				var newVal = $this.find('option:selected').val();
				$('.select-holder span').text(newVal);
			});
		}

		selectValue();

		//search click
		$('a.search-ico').on('click', function(e) {
			e.preventDefault();
			$('.search-holder').toggleClass('visible');			
		});

		//add parent class
		$('.nav li').each(function() {
			var $this = $(this);

			if ( $this.find('.sub-menu').length ) {
				$this.addClass('parent');
			}
		});

		//logo click
		$('.logo a').on('click', function(e) {
			e.preventDefault();

			if ( $win.width() > 1000 ) {
				$('body').toggleClass('reverse');
				$('.search-holder').removeClass('visible');
			}
		});

		if ( $win.width() >= 1001 ) {
			heroBackground();
		} else {
			$('.hero-section').css('background', 'transparent');
		}

		if ( $win.width() < 1025 ) {
			$('.nav li.parent > a').on('click', function(e) {
				e.preventDefault();

				var $this = $(this);
				var parentLi = $this.parent();

				parentLi.find('> .sub-menu').addClass('open').siblings().removeClass('open');
			});
		}

		//burger menu click
		$('a.menu-btn').on('click', function(e) {
			e.preventDefault();
			$('.nav').addClass('open');
		});

		$('a.close-btn').on('click', function(e) {
			e.preventDefault();
			$('.nav').removeClass('open');
			$('.sub-menu').removeClass('open');
		});

		$('a.back-btn').on('click', function(e) {
			e.preventDefault();

			$(this).parent().removeClass('open');
		});

		$win.on('resize', function() {
			setTimeout(function() {
				if ( $win.width() >= 1001 ) {
					heroBackground();					
				} else {
					$('body').removeClass('reverse');
					$('.hero-section').css('background', 'transparent');					
				}
			}, 50);
		})
	});

})(jQuery, window, document);
