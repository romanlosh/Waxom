jQuery(document).ready(function() {
new WOW({mobile:false}).init();
$(".cont_burger").on('click',function(){
    $(this).find(".hambergerIcon").toggleClass("open");
});
	$('#search_btn').on('mouseenter', function() {
		var search_btn = $('#search_btn');
		var hidden_links = $('.hidden_control');
		var search_inp = $('#search_area');
		hidden_links.addClass('hidden');
		search_inp.addClass('search_active');
		search_inp.animate({'width':'350px'}, 50);
		search_inp.focus();
	});
	$('.top_header_sec').on('mouseleave', function() {
		var search_btn = $('#search_btn');
		var hidden_links = $('.hidden_control');
		var search_inp = $('#search_area');
		hidden_links.removeClass('hidden');
		search_inp.removeClass('search_active');
		search_inp.animate({'width':'1'}, 0);
		search_inp.blur();
		search_inp.val('');
	});
	$('.accordion').on('mouseenter', function() {
		$(this).closest('li').find('.accordion_active').fadeIn(150);
	});
	$('li').on('mouseleave', function() {
		$(this).closest('li').find('.accordion_active').fadeOut(150);
	});
	var head_slider = $('.headline_slider');
	head_slider.slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	cssEase: 'ease-out',
	autoplaySpeed: 3000,
	pauseOnHover: false,
	pauseOnFocus: false,
	arrows: false,
	dots: true,
	infinite: true
  });


	var modal = $('.modal');
	var window_modal = $('#modal_window');
	var close_modal = $('#modal_close');
	var overlay = $('#modal_overlay');
	var close_dbl = [overlay, close_modal];
$(function modal_menu() {
	modal.on('click', function() {
		overlay.fadeIn(300,
		function() {
			window_modal.css('display', 'block');
			window_modal.animate({opacity: 1, top: '50%'}, 300);
		});
	});
	$(close_dbl).each(function(){
		$(this).on('click', function() {
			window_modal.animate({opacity: 0, top: '35%'}, 300,
				function() {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
		})
	});
});

$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "source/forms/mail.php",
			data: {
				name: $('#modal_name').val(),
				phone: $('#modal_phone').val()
			},
			success: function(data) {
				console.log(data);
			}
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for the application! Soon we will contact you.");
			$("#form").trigger("reset");

			window_modal.animate({opacity: 0, top: '35%'}, 300,
				function() {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
		});
		return false;
});


	$(window).scroll(function() {
		var the_top = $(window).scrollTop();
		var mob_nav = $('#mobile_nav');
    if (the_top > 200) {
        $('#navigate').addClass('opacity_0');
        mob_nav.css('opacity','0');
    }
    else {
        $('#navigate').removeClass('opacity_0');
        mob_nav.css('opacity','1');
    };

	if (the_top >= $('header').height()) {
		$('#navigate').addClass('navigations_fixed');
		$('#scene_fix_menu').addClass('scene_fix_menu');
		mob_nav.addClass('mobile_nav_fixed');

		} 

		else {
		$('#navigate').removeClass('navigations_fixed');
		$('#scene_fix_menu').removeClass('scene_fix_menu');
		mob_nav.removeClass('mobile_nav_fixed');
		};

		if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
	});

	var burger_switch = $('#cont_burger');
	var animate_mob = $(".container_mobile");
	var burger_icon = $('.hambergerIcon');
	var switch_mob = false;
	burger_switch.on('click', function() {
		if (switch_mob == false) {
			burger_icon.css('background-color', '#333');
			animate_mob.addClass('container_mobile_active');
			search_switch.fadeOut(100);
			switch_mob = true;
			$('body').addClass('overflow__content');
		} else if (switch_mob == true) {
			burger_icon.css('background-color', '#fff');
			animate_mob.removeClass('container_mobile_active');
			search_switch.fadeIn(500);
			switch_mob = false;
			$('body').removeClass('overflow__content');
		};
		
	});
	var search_switch = $('#open_search');
	var search_window = $('.mob_search_active');
	var open_search_menu = false;
	var close_search = $('.close_search');
	search_switch.on('click', function() {
		if (open_search_menu == false) {
			$(this).fadeOut(0);
			close_search.fadeIn(300);
			search_window.addClass('mob_search_active_open');
			burger_switch.fadeOut();
			open_search_menu = true;
			$('body').addClass('overflow__content');
			
		}
	});
	close_search.on('click',function() {
		if (open_search_menu == true) {
			$(this).fadeOut(0);
			search_switch.fadeIn(300);
			burger_switch.fadeIn();
			open_search_menu = false;
			search_window.removeClass('mob_search_active_open');
			$('body').removeClass('overflow__content');
		}
	});

	var photo_box = $('.sample_photo');
	photo_box.on('click', function () {
		$(this).find('img').addClass('sample_photo_Zindex');
        setTimeout(function () {
            photo_box.find('img').removeClass('sample_photo_Zindex');
        }, 2000);
    });

	var switch_article = false;
	var hidden_artc = $('.hidden_atrc');
    $('#load_article').on('click', function() {
    	if (switch_article == false) {
    		hidden_artc.animate({height: 'show'}, 1000);
    		switch_article = true;
    		setTimeout(function() {
				$('#load_article').text('Hide');
    		}, 1000);
    	} else if (switch_article == true) {
    		hidden_artc.animate({height: 'hide'}, 1000);
    		switch_article = false;
    		setTimeout(function() {
				$('#load_article').text('Load More');
    		}, 1000);
    	};
    });

$(function cards_manipulation() {
   	var sw_all_cards = $('#all_cards');
    var sw_webDes_cards = $('#webDes_cards');
    var sw_mobApp_cards = $('#mobApp_cards');
    var sw_illust_cards = $('#illust_cards');
    var sw_phpoto_cards = $('#photo_cards');

    var card_mobApp = $('.card_mobApp');
    var card_photo = $('.card_photo');
    var card_illust = $('.card_illust');
    var card_web = $('.card_web');

    sw_all_cards.on('click', function() {
    	$(this).addClass('active_cards_type');
    	$('#webDes_cards, #mobApp_cards, #illust_cards, #photo_cards').removeClass('active_cards_type');
    	$('.card_mobApp, .card_photo, .card_illust, .card_web').fadeIn();
	});
	sw_webDes_cards.on('click', function() {
		$(this).addClass('active_cards_type');
		$('#all_cards, #mobApp_cards, #illust_cards, #photo_cards').removeClass('active_cards_type');
		$('.card_mobApp, .card_photo, .card_illust').fadeOut(0);
		card_web.fadeIn();
	});
	sw_mobApp_cards.on('click', function() {
		$(this).addClass('active_cards_type');
		$('#all_cards, #webDes_cards, #illust_cards, #photo_cards').removeClass('active_cards_type');
		$('.card_photo, .card_illust, .card_web').fadeOut(0);
		card_mobApp.fadeIn();
	});
	sw_illust_cards.on('click', function() {
		$(this).addClass('active_cards_type');
		$('#all_cards, #webDes_cards, #mobApp_cards, #photo_cards').removeClass('active_cards_type');
		$('.card_photo, .card_mobApp, .card_web').fadeOut(0);
		card_illust.fadeIn();
	});
	sw_phpoto_cards.on('click', function() {
		$(this).addClass('active_cards_type');
		$('#all_cards, #webDes_cards, #mobApp_cards, #illust_cards').removeClass('active_cards_type');
		$('.card_illust, .card_mobApp, .card_web').fadeOut(0);
		card_photo.fadeIn();
	});
});

    $('.blog_posts').slick({
    slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	cssEase: 'ease-out',
	autoplaySpeed: 3000,
	pauseOnHover: true,
	pauseOnFocus: true,
	arrows: true,
	dots: false,
	infinite: true,
	responsive: [
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
  ]
  });

    var show = true;
    var countbox = ".counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
             
            show = false;
        }
    });

    function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}
if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

})