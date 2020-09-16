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

//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 896 || document.documentElement.scrollTop > 896) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}