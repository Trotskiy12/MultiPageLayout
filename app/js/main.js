// import mixitup from 'mixitup';
$(function () {

    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header__btn-mobile').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });


    $('.top__slider').slick({ 
        // точки вслючить
        dots: true,
        // стрелки выключить
        arrows: false,
        // плавный переход
        fade: true,
        // автоматическое использование
        autoplay: true
    });

    $('.contact-slider').slick({ 
        slidesToShow: 10,
        slidesToScroll: 10,
        // точки вслючить
        dots: true,
        // стрелки выключить
        arrows: false,
    });

    $('.article-slider__box').slick({ 
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowrigth"><img src="images/arrow-rigth.svg" alt="arrow rigth"></button>'
    });


    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})