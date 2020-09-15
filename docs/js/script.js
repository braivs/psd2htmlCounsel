var pr = document.getElementsByClassName("swiper-prev")[0];
var nx = document.getElementsByClassName("swiper-next")[0];
var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderCustom: function (swiper, current, total) {
			return current + ' of ' + total;
		},
	},
    mousewheel: {},
    navigation: {
        nextEl: nx,
        prevEl: pr,
    },
});