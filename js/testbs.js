(function() {
	var $lis = $('.main-controls .pager li');
	$lis.each(function() {
		$(this).click(function() {

			var oldIndex = $('.main-controls .pager li').filter(function() {
				return $(this).css('background-color') == 'rgba(255, 255, 255, 0.8)'
			}).data('index');

			if(oldIndex == $(this).data('index')){
				return;
			}else{
				var newIndex = $(this).data('index');
				changeSlide(oldIndex, newIndex);
			}		

		})
	})

	var $dirs = $('.main-controls .direction div');
	$dirs.each(function() {
		$(this).click(function() {
				var oldIndex = $('.main-controls .pager li').filter(function() {
					return $(this).css('background-color') == 'rgba(255, 255, 255, 0.8)'
				}).data('index');
			var newIndex;

			if($(this).hasClass('left')) {
				newIndex = oldIndex - 1;
				if(newIndex == -1) {
					newIndex = 4;
				}
			}else{
				newIndex = oldIndex + 1;
				if(newIndex == 5) {
					newIndex = 0;
				}
			}

			changeSlide(oldIndex, newIndex);
		})	
	})

	function changeSlide(oldIndex, newIndex) {
		$('.main-controls .pager li')
			.eq(oldIndex)
			.css('background-color', 'rgba(255, 255, 255, 0.2)')
			.css('border', '1px solid rgba(255, 255, 255, 0.3)');

		$('.main-controls .pager li')
			.eq(newIndex)
			.css('background-color', 'rgba(255, 255, 255, 0.8)')
			.css('border', '1px solid rgb(255, 255, 255)');

		$('.main-viewport li')
			.eq(oldIndex)
			.fadeOut(500, function(){
				$(this)
					.css('display', 'none');		
			});

		$('.main-viewport li')
			.eq(newIndex)
			.css('z-index', '-1')
			.fadeIn(500, function(){
				$(this)
					.css('display', 'block')
					.css('z-index', 0);
			});
	}

	function updateOrientationChange() {
		if(window.orientation == 0) {
			$('body').removeClass('landscape');
			return;
		}
		$('body').addClass('landscape');
	}

	updateOrientationChange();

	window.addEventListener('orientationchange', updateOrientationChange, false);

	$('.image-gallery .square').css('height', function() {
		return $(this).find('img').height();
	});

	function updateNavbarItems() {
		if($(document).width() >= 977) {
		
		var leftDis = ($(document).width() - $('nav ul.nav').width()) / 2;
		$('nav ul.nav').css('left', leftDis + 'px');

		var rightNavleft = $(document).width() - $('nav .right-nav a').width() - 40;
		$('nav .right-nav').css('left', rightNavleft +'px');
		}else {
			$('nav ul.nav').css('left', 0);
		}
	}

	$('footer .mobile-title .open-btn').click(function() {
		$(this).toggleClass('open');
	})

	updateNavbarItems();
	
	window.addEventListener('resize', updateNavbarItems, false);

})()
