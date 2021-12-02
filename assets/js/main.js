$(function () {

    // Гамбургер
    $('.hamburger-menu').click(function () {
        $('.sliding-navbar').toggleClass('sliding-navbar--open');
        $('.sliding-navbar-catalog').removeClass('sliding-navbar-catalog--open');
        $('.mask').toggleClass('show')
        $('.hamburger').toggleClass('active');
        $('body').toggleClass('active');
    });
    $('.menu_catalog').click(function(){
        $('.sliding-navbar-catalog').toggleClass('sliding-navbar-catalog--open');
        $('.drop_mob').addClass("active")
    });
    $('.mask').click(function () {
        $('.sliding-navbar').toggleClass('sliding-navbar--open');
        $('.sliding-navbar-catalog').removeClass('sliding-navbar-catalog--open');
        $('.mask').removeClass('show');
        $('.hamburger').toggleClass('active');
    })
    $('.navbar--catalog_title').click(function(){
        $('.sliding-navbar-catalog--open').removeClass('sliding-navbar-catalog--open')
    });

    //Гавная области слайдер
    $('.app_area-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1155,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 725,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 535,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

     //Баннер Слайдер
     $('.banner_slider').slick({
        fade: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500
    });
    let bannerDots = $('.banner_slider .slick-dots');
    $('.banner .container').append(bannerDots);

    //Главная слайдер
    $('.content_bottom-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1075,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 725,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    //КАТАЛОГ ТРУБКИ СЛАЙДЕР
    $('.trubki_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1
    });

    //Wow JS
    new WOW().init();

    //Каталог ховер
    $(".menu_catalog").on({
        mouseenter: function () {
            $('.drop').addClass('active')
        }
    });
    $(".drop").on({
        mouseleave: function () {
            $(this).removeClass('active')
        }
    });

    // меню при ресайзе
    let mobile = false;
    let mobClass = false;
    let mobView = false;
    let setLocation = $('.header_top-location');
    let mobTel = $('.header_top-mob_tel');
    let catalogDrop = $('.drop_mob');
    let showMoreLink = $('.banner_btn');
    let areaDescr = $('.app_area-content_subtitle');
    let areaSlider = $('.app_area-slider');
    let areaSliderArrows = $('.app_area-slider .slick-arrow');
    let burgerMenu = $('.menu');
    let menuCatalog = $('.menu_catalog > a');


    if ($(window).width() < 1155) {
        mobile = true;
        $('.navbar--items').append(burgerMenu);
        $('.navbar--items').prepend(setLocation);
        $('.navbar--catalog').append(catalogDrop);
        $('.app_area .container .app_area-content').after(areaSlider);
        menuCatalog.removeAttr('href');
    }

    if ($(window).width() < 767) {
        mobClass = true;
        $('.menu').append(mobTel);
    }

    if ($(window).width() < 695) {
        mobView = true;
        $('.content .container').prepend(showMoreLink);
        $('.app_area-content').after(areaDescr)
    }

    $(window).on('resize', function () {

        if ($(window).width() < 1155 && !mobile) {
            mobile = true;
            $('.navbar--items').prepend(setLocation);
            $('.navbar--catalog').append(catalogDrop);
            $(".menu_catalog").on({
                mouseenter: function () {
                    $('.drop').addClass('active')
                }
            });
            $(".drop").on({
                mouseleave: function () {
                    $(this).removeClass('active')
                }
            });
            $('.app_area .container .app_area-content').after(areaSlider);
            $('.navbar--items').append(burgerMenu);
            menuCatalog.removeAttr('href');
        }
        if ($(window).width() >= 1154 && mobile) {
            mobile = false;
            $('.header_top-search').after(setLocation);
            $('.banner').append(catalogDrop);
            $('.app_area .container.container_slider').after(areaSlider);
            $('.header_bottom').prepend(burgerMenu);
        }

        if ($(window).width() < 767 && !mobClass) {
            mobClass = true;
            $('.menu').append(mobTel);

        }
        if ($(window).width() >= 766 && mobClass) {
            mobClass = false;
            $('.hamburger-menu').before(mobTel)

        }

        if ($(window).width() < 695 && !mobView) {
            mobView = true;
            $('.content .container').prepend(showMoreLink);
            $('.app_area-content').after(areaDescr);

        }
        if ($(window).width() >= 694 && mobView) {
            mobView = false;
            $('.banner .title').after(showMoreLink);
            $('.app_area-content_left').append(areaDescr)
        }
    });

    //ВЫБРАТЬ ЛОКАЦИЮ
    $('.header_top-location').on('click', function () {
        $('.header_top-location .list').slideToggle();
        $('.header_top-location .select_arrow').toggleClass('active')
    });
    $('.header_top-location .list a').on('click', function (e) {
        e.preventDefault();
        a = $(this).html();
        $(this).closest('.header_top-location').find('.visual_part').html(a)
    });

   

    //Главная поиск POPUP
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //----------------------
    let searchFormClose = $('.zoom-anim-dialog .mfp-close');
    $('.zoom-anim-dialog .container').append(searchFormClose);

    //Drop меню моб, каталог
    $('.menu_catalog-mob').on('click', function () {
        $('.drop_mob').slideToggle()
        $(this).toggleClass('active');
    });

    //АККАРДИОН
    $(".trubki_item > .trubki_item-wrapper").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.trubki_item-inner').slideUp(400);
        } else {
            $(".trubki_item > .trubki_item-wrapper").removeClass("active");
            $(this).addClass("active");
            $('.trubki_item-inner').slideUp(400);
            $(this).siblings('.trubki_item-inner').slideDown(400);
        }
    });

    //АККАРДИОН ФИЛЬТРЫ
    $('.filters_item-wrapper').on('click', function () {
        let orderContent = $(this).closest('.filters_item').find('.filters_item-content');
        orderContent.slideToggle();
        $(this).toggleClass('active');
    });

    //Якорь Страницы
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > 100) {
            $('.goToTop_btn').fadeIn();
        } else {
            $('.goToTop_btn').fadeOut();
        }
    });

    $('.goToTop_btn').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        scrollto(0, 1000);
    });


    // scrollto ПЛАВНЫЕ ЯКОРИ
    window.scrollto = function (destination, speed) {
        if (typeof speed == 'undefined') {
            speed = 800;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination - 60
        }, speed);
    };

    $("a.scrollto").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        scrollto(destination);
        return false;
    });

    //Пагинация
    var pr = document.querySelector('.paginate.left');
    var pl = document.querySelector('.paginate.right');

    pr.onclick = slide.bind(this, -1);
    pl.onclick = slide.bind(this, 1);

    var index = 0, total = 12;

    function slide(offset) {
        index = Math.min(Math.max(index + offset, 0), total - 1);

        document.querySelector('.counter').innerHTML = (index + 1) + ' / ' + total;

        pr.setAttribute('data-state', index === 0 ? 'disabled' : '');
        pl.setAttribute('data-state', index === total - 1 ? 'disabled' : '');
    }

    slide(0);

    // Ползунки в фильтре
    let minPrice = parseFloat($("#range_val1").val())
    let maxPrice = parseFloat($("#range_val2").val())
    $('#range').slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            $("#range_val1").val(ui.values[0]);
            $("#range_val2").val(ui.values[1]);
        },
        stop: function (event, ui) {

            changeFilters('text')

        }
    });

    let minPrice1 = parseFloat($("#range_val3").val())
    let maxPrice2 = parseFloat($("#range_val4").val())
    $('#range2').slider({
        range: true,
        min: minPrice1,
        max: maxPrice2,
        values: [minPrice1, maxPrice2],
        slide: function (event, ui) {
            $("#range_val3").val(ui.values[0]);
            $("#range_val4").val(ui.values[1]);
        },
        stop: function (event, ui) {

            changeFilters('text')

        }
    });

    let minPrice3 = parseFloat($("#range_val5").val())
    let maxPrice4 = parseFloat($("#range_val6").val())
    $('#range3').slider({
        range: true,
        min: minPrice3,
        max: maxPrice4,
        values: [minPrice3, maxPrice4],
        slide: function (event, ui) {
            $("#range_val5").val(ui.values[0]);
            $("#range_val6").val(ui.values[1]);
        },
        stop: function (event, ui) {

            changeFilters('text')

        }
    });
});


// ==============================================================================
