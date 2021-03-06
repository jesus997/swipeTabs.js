/**
 *	swipeTabs.js is based on the codepen of Galeel Bhasha (https://codepen.io/gbhasha/pen/gaggRR).
 *	author: Jesús Magallón (https://github.com/jesus997)
 */

(function($) {
	'use strict';

	$.fn.andFind = function(expr) {
		return this.find(expr).add(this.filter(expr));
	};

	$.fn.swipeTabs = function(options) {
		var defaultTabs = {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			swipeToSlide: true,
			touchThreshold: 10
		},
		defaultContent = {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			swipeToSlide: true,
			draggable: false,
			touchThreshold: 10
		},
		defaults = {
			swipeTabsContainer: $(this),
			swipeTabs: $($(this).find('.swipe-tab')),
			swipeTabsContentContainer: $($(this).data('for')),
			currentIndex: 0,
			activeTabClassName: 'active-tab',
			slick: {
				tabs: defaultTabs,
				content: defaultContent
			}
		},
		settings = $.extend({}, defaults, options);
		settings.slick.tabs = $.extend({}, defaultTabs, options.slick.tabs);
		settings.slick.content = $.extend({}, defaultContent, options.slick.content);

		if(settings.slick.content.draggable) {
			settings.slick.content.asNavFor = settings.swipeTabsContainer;
		}

		settings.slick.tabs.asNavFor = settings.swipeTabsContentContainer;

		if( $.fn.slick !== undefined ) {
			if( settings.swipeTabsContainer.length > 0 ) {
				if( settings.swipeTabs.length > 0 ) {
					if( settings.swipeTabsContentContainer.length > 0 ) {

						settings.swipeTabsContainer.on('init', function(event, slick) {
							settings.swipeTabsContentContainer.removeClass('invisible');
							settings.swipeTabsContainer.removeClass('invisible');

							settings.currentIndex = slick.getCurrent();
							settings.swipeTabs.removeClass(settings.activeTabClassName);
							$(settings.swipeTabs).andFind('[data-slick-index=' + settings.currentIndex + ']').addClass(settings.activeTabClassName);
						});

						settings.swipeTabsContainer.slick(settings.slick.tabs);

						settings.swipeTabsContentContainer.slick(settings.slick.content);


						settings.swipeTabs.on('click', function(event) {
							// gets index of clicked tab
							settings.currentIndex = $(this).data('slick-index');
							settings.swipeTabs.removeClass(settings.activeTabClassName);
							$(settings.swipeTabs).andFind('[data-slick-index=' + settings.currentIndex +']').addClass(settings.activeTabClassName);
							settings.swipeTabsContainer.slick('slickGoTo', settings.currentIndex);
							settings.swipeTabsContentContainer.slick('slickGoTo', settings.currentIndex);
						});

						//initializes slick navigation tabs swipe handler
						settings.swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
							settings.currentIndex = $(this).slick('slickCurrentSlide');
							settings.swipeTabs.removeClass(settings.activeTabClassName);
							$(settings.swipeTabs).andFind('[data-slick-index=' + settings.currentIndex + ']').addClass(settings.activeTabClassName);
						});

						return this;

					}else {
						console.error("[SwipeTabs] Undefined swipeTabsContentContainer element.");
					}
				} else {
					console.error("[SwipeTabs] Undefined swipeTabs element.");
				}
			} else {
				console.error("[SwipeTabs] Undefined swipeTabsContainer element.");
			}
		} else {
			console.error("[SwipeTabs] Slick is not installed, go to http://kenwheeler.github.io/slick/ and install before.");
		}

		return false;
	}
})(jQuery);