{
    "use strict";
    $(document).ready(() => {
        let leftMenuContainerEl = $('.left-menu-container');
        let rightMenuContainerEl = $('.right-menu-container');
        let bottomMenuContainerEl = $('.bottom-menu-container');

        let switchLeftArrow = (element) => {
            if ($(element).hasClass('fa-chevron-circle-right')) {
                $(element).removeClass('fa-chevron-circle-right');
                $(element).addClass('fa-chevron-circle-left');
            } else {
                $(element).removeClass('fa-chevron-circle-left');
                $(element).addClass('fa-chevron-circle-right');
            }
        };

        let switchRightArrow = (element) => {
            if ($(element).hasClass('fa-chevron-circle-left')) {
                $(element).removeClass('fa-chevron-circle-left');
                $(element).addClass('fa-chevron-circle-right');
            } else {
                $(element).removeClass('fa-chevron-circle-right');
                $(element).addClass('fa-chevron-circle-left');
            }
        };

        let switchBottomArrow = (element) => {
            if ($(element).hasClass('fa-chevron-circle-up')) {
                $(element).removeClass('fa-chevron-circle-up');
                $(element).addClass('fa-chevron-circle-down');
            } else {
                $(element).removeClass('fa-chevron-circle-down');
                $(element).addClass('fa-chevron-circle-up');
            }
        };

        let resetLeftMenu = () => {
            $('.nav-item-left').children('ul').slideUp();
        };
        let resetRightMenu = () => {
            $('.nav-item-right').children('ul').slideUp();
        };

        let typeHeaderMessage = (heading) => {
            let message = "";
            let index = 0;
            let intervalId = setInterval(() => {
                message += heading.charAt(index);
                $('.header-text').html(message);
                index++;
                if (index === heading.length) {
                    clearInterval(intervalId);
                }
            }, 50);
        };

        let resetCircleColor = () => {
            $('.fa-circle').each(function () {
                $(this).css('color', 'var(--white-color)');
            });
        };

        $('.nav-item-left').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });
        $('.nav-item-right').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });

        $('.left-menu-header-container').click(function () {
            if ($(leftMenuContainerEl).hasClass('left-menu-container-open')) $('.nav-links-left').fadeOut(1);
            else $('.nav-links-left').fadeIn(1);
            $(leftMenuContainerEl).toggleClass('left-menu-container-open left-menu-container-close');
            resetLeftMenu();
            $('.left-arrow').each(function () {
                switchLeftArrow(this);
            });
        });
        $('.right-menu-header-container').click(function () {
            if ($(rightMenuContainerEl).hasClass('right-menu-container-open')) $('.nav-links-right').fadeOut(1);
            else $('.nav-links-right').fadeIn(1);
            $(rightMenuContainerEl).toggleClass('right-menu-container-open right-menu-container-close');
            resetRightMenu();
            $('.right-arrow').each(function () {
                switchRightArrow(this);
            });
        });
        $('.bottom-menu-header-container').click(function () {
            $(bottomMenuContainerEl).toggleClass('bottom-menu-container-open');
            $(bottomMenuContainerEl).toggleClass('bottom-menu-container-close');
            $('.bottom-arrow').each(function () {
                switchBottomArrow(this);
            });
        });

        let showPhotos = (photo) => {

        };

        let showPhoto1 = () => {
            $('#slideshow-photo').attr('src', '');
        };

        $('.fa-circle').click(function () {
            console.log($(this));
            resetCircleColor();
            $(this).css('color', 'var(--circle-color)');
            if ($(this).attr('id') === 'slide-photo-1') {
                showPhoto1();
            }
        });
        typeHeaderMessage("Hi, my name is Hung. Welcome to my personal site. Please checkout my links to learn more about me! Currently this only looks good on mobile view :D!");
    });
}