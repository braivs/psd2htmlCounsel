var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderCustom: function (swiper, current, total) {
			return current + ' of ' + total;
		},
	},
	mousewheel: {},
});