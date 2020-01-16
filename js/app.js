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

        let resetLeftMenu = () => {
            $('.nav-item-left').children('ul').slideUp();
        };
        let resetRighttMenu = () => {
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

        $('.nav-item-left').children('h3').click(function () {
            $(this).next().slideToggle();
        });
        $('.nav-item-right').children('h3').click(function () {
            $(this).next().slideToggle();
        });

        $('#left-menu-header-container').click(function () {
            $(leftMenuContainerEl).toggleClass('left-menu-container-open');
            $(leftMenuContainerEl).toggleClass('left-menu-container-close');
            resetLeftMenu();
            $('.left-arrow').each(function () {
                switchLeftArrow(this);
            });
        });
        $('#right-menu-header').click(function () {
            $(rightMenuContainerEl).toggleClass('right-menu-container-open');
            $(rightMenuContainerEl).toggleClass('right-menu-container-close');
            resetRighttMenu();
            $('.right-arrow').each(function () {
                switchRightArrow(this);
            });
        });

        typeHeaderMessage("Hi, my name is Hung. Welcome to my personal site. Please checkout my links to learn more about me!");
    });
}