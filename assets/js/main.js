const navShow = () => {
	const navBar = document.querySelector('.nav-bar');
	const menuList = document.querySelector('.menu-list');

	navBar.addEventListener('click', () => {
		menuList.classList.toggle('nav-active');

		navBar.classList.toggle('close')
	});
}
navShow();

let iconSearch = document.querySelector('.icon-search'),
	searchInput = document.querySelector('.search-input');

iconSearch.addEventListener('click', function () {
	searchInput.classList.toggle('active');
});

$(function () {
	$('.preview').click(function () {
		$('.menu-popup-list').addClass('open');

	});

	$('.popup-close').click(function () {
		$('.menu-popup-list').removeClass('open')

	});

	$('.menu-popup-list').click(function () {
		$('.menu-popup-list').removeClass('open')

	})

});


const countDate = new Date('feb 30,2023 00:00:00').getTime();

function newDate() {
	const now = new Date().getTime();
	let gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / (day));
	let h = Math.floor((gap % (day)) / (hour));
	let m = Math.floor((gap % (hour)) / (minute));
	let s = Math.floor((gap % (minute)) / (second));

	document.querySelector('.second').innerText = s;
	document.querySelector('.minute').innerText = m;
	document.querySelector('.hour').innerText = h;
	document.querySelector('.day').innerText = d;
}

setInterval(() => {
	newDate();
}, 1000);


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.select');
	const caret = dropdown.querySelector('.caret');
	const menu = dropdown.querySelector('.dropdown-menu');
	const options = dropdown.querySelectorAll('.dropdown-menu li');
	const selected = dropdown.querySelector('.selected');

	select.addEventListener('click', () => {
		caret.classList.toggle('caret-rotate');
		menu.classList.toggle('menu-open');
	});

	options.forEach(option => {
		option.addEventListener('click', () => {
			selected.innerText = option.innerText;
			caret.classList.remove('caret-rotate');
			menu.classList.remove('menu-open');
		});
	});
});


$('.autoplay').owlCarousel({
	loop: true,
	stagePadding: 20,
	margin: 30,
	autoplay: true,
	items: 5,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		991: {
			items: 4
		},
		1024: {
			items: 5,
		}
	}
})



$('.home-carousel-four').owlCarousel({
	loop: true,
	autoplay: true,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
})

let kebab = document.querySelector('.kebab'),
	middle = document.querySelector('.middle'),
	dropdown = document.querySelector('.right-menu');

kebab.addEventListener('click', function () {
	middle.classList.toggle('active');
	dropdown.classList.toggle('active');
})

$('.home-carousel').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	stagePadding: 20,
	items: 4,
	margin: 20,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		991: {
			items: 3,
		},
		1024: {
			items: 4,
		},
		1200: {
			items: 4
		},

	},
});


$('.home-carousel-list').owlCarousel({
	loop: true,
	dots: true,
	stagePadding: 20,
	items: 4,
	margin: 20,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		991: {
			items: 3,
		},
		1024: {
			items: 4,
		},
		1200: {
			items: 4
		},

	},
});


$('.image-button-slider').owlCarousel({
	nav: false,
	dots: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		991: {
			items: 3,
		},
		1024: {
			items: 5,
		},
		1200: {
			items: 5
		},

	},
});


$('.home-carousel-row').owlCarousel({
	loop: true,
	dots: true,
	stagePadding: 20,
	margin: 20,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			rows: 1,
		},
		768: {
			items: 2,
			rows: 1,
		},
		991: {
			items: 3,
			rows: 2,
		},
		1024: {
			items: 3,
			rows: 2,
		},
		1200: {
			items: 4,
			rows: 2,
		},

	},
});

let modalcarousel = $('.owl-carousel');
modalcarousel.owlCarousel({
	items: 1,
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 1,
		},
		991: {
			items: 1,
		},
		1024: {
			items: 1,
		},
		1200: {
			items: 1
		},

	},
});



$(function () {
	$('.default-wrapper').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().find('.select-ul li').click(function () {
			let element = $(this).text();
			$(this).parent().parents('.select-wrapper').find('.dropdown-head').text(element);
			$(this).parents('.select-wrapper').removeClass('active');
		});
	});
});

function allPrice() {
	let delivery = $('.delivery').text();
	let allProducts = $('.product-order').find('.all-products').text();
	let allCount = 0;
	allCount = parseInt(delivery) + parseInt(allProducts)
	$('.all-price').text(allCount);
}

function allPriceMinus(productPrice) {
	let allProducts = $('.product-order').find('.all-price').text();
	let allCount = 0;
	if (allCount < 0) {
		return;
	}
	allCount = parseInt(allProducts) - parseInt(productPrice)
	$('.all-price').text(allCount);
}

$(function () {
	allPrice();
	$('.plus').click(function () {
		let plusNum = $(this).parent().find('.number').text();
		let productPrice = $(this).parents('.shopping').find('.price').text();
		let totalPrice = $(this).parents('.shopping').find('.total-price').text();
		$(this).parent().find('.number').text(parseInt(plusNum) + 1);
		$(this).parents('.shopping').find('.total-price').text(parseInt(totalPrice) + parseInt(productPrice));
		let sum = 0;
		$('.basket-table > tbody  > tr').each(function () {
			let quantity = $(this).find('.total-price').text();
			sum += parseInt(quantity);
			$('.all-products').text(sum);

		})
		allPrice();
	});

	$('.minus').click(function () {
		let minusNum = $(this).parent().find('.number').text();
		let productPrice = $(this).parents('.shopping').find('.price').text();
		let totalPrice = $(this).parents('.shopping').find('.total-price').text();
		if (parseInt(minusNum) <= 1) {
			return;
		}
		$(this).parent().find('.number').text(parseInt(minusNum) - 1);
		$(this).parents('.shopping').find('.total-price').text(parseInt(totalPrice) - parseInt(productPrice));
		$(this).parents('.product-order').find('.all-products').text();
		let sum = 0;
		$('.basket-table > tbody  > tr').each(function () {
			let quantity = $(this).find('.total-price').text();
			sum += parseInt(quantity);
			$('.all-products').text(sum);

		});
		allPriceMinus(productPrice);
	});
})

$(document).ready(function () {

	$(".btn-remove").on("click", function () {
		$(this).closest("tr").remove();
		let totalPrice = $(this).parents('.shopping').find('.total-price').text();
		let allProducts = $('.product-order').find('.all-products').text();
		let allPriceRemove = $('.product-order').find('.all-price').text();
		$('.all-products').text(parseInt(allProducts) - parseInt(totalPrice));
		$('.all-price').text(parseInt(allPriceRemove) - parseInt(totalPrice))
	});

});

let menuPopup = document.querySelector(".menu-popup");
let previewBox = menuPopup.querySelectorAll(".modal");

document.querySelectorAll(".similar-product ").forEach(product => {
	product.onclick = () => {
		menuPopup.style.display = "flex";
		let name = product.getAttribute("data-name");
		previewBox.forEach(modal => {
			let target = modal.getAttribute("data-target");
			if (name == target) {
				modal.classList.add('active');
			}
		});
	};
});

previewBox.forEach(close => {
	close.querySelector('.fa-xmark').onclick = () => {
		close.classList.remove('active')
		menuPopup.style.display = "none";
	}
});


$('.menu-popup').click(function () {
	$('.menu-popup').remove('active');
	menuPopup.style.display = "none";

})








