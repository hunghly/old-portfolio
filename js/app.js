{
    "use strict";
    $(document).ready(() => {
        let leftMenuContainerEl = $('.left-menu-container');

        let switchLeftArrow = (element) => {
            if ($(element).hasClass('fa-chevron-circle-right')) {
                $(element).removeClass('fa-chevron-circle-right');
                $(element).addClass('fa-chevron-circle-left');
            } else {
                $(element).removeClass('fa-chevron-circle-left');
                $(element).addClass('fa-chevron-circle-right');
            }
        };

        $('.nav-item-left').children('h3').click(function () {
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

    });
}