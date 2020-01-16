{
    "use strict";
    $(document).ready(() => {
        let leftMenuContainerEl = $('.left-menu-container');
        let rightMenuContainerEl = $('.right-menu-container');

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

        $('.nav-item-left').children('h3').click(function () {
            $(this).next().slideToggle();
        });
        $('.nav-item-right').children('h3').click(function () {
            $(this).next().slideToggle();
        });

        $('#left-menu-header').click(function () {
            $(leftMenuContainerEl).toggleClass('left-menu-container-open');
            $(leftMenuContainerEl).toggleClass('left-menu-container-close');
            console.log($('.left-arrow'));
            $('.left-arrow').each(function () {
                switchLeftArrow(this);
            });
        });
        $('#right-menu-header').click(function () {
            $(rightMenuContainerEl).toggleClass('right-menu-container-open');
            $(rightMenuContainerEl).toggleClass('right-menu-container-close');
            console.log($('.right-arrow'));
            $('.right-arrow').each(function () {
                switchRightArrow(this);
            });
        });

    });
}