{
    "use strict";
    $(document).ready(() => {
        let currentPhotoIndex = 1;
        let flag;

        let slideShowPhotos = [
            {
                description: 'a frontal photo of me in the military uniform.',
                url: './img/senior-airman-cropped.jpg'
            },
            {
                description: 'a photo of me at mt. fuji',
                url: './img/mt-fuji.jpg'
            },
            {
                description: 'a photo of us at the aquarium',
                url: './img/aquarium.jpg'
            },
            {
                description: 'a photo of me and a group of friends',
                url: './img/the-guys.jpeg'
            },
        ];

        let familyPhotos = [
            {
                description: 'some baby photos',
                url: './img/baby.jpg'
            },
            {
                description: 'a photo of me at mt. fuji',
                url: './img/mt-fuji.jpg'
            },
            {
                description: 'a photo of us at the aquarium',
                url: './img/aquarium.jpg'
            }
        ];

        let getPhotoIndex = (id) => {
            switch (id) {
                case '0':
                    return 0;
                case '1':
                    return 1;
                case '2':
                    return 2;
                case '3':
                    return 3;
                default:
                    return false;
            }
        };

        let startSlideShow = () => {
            let slideShowId = setInterval(() => {
                resetBodyCircleColor();
                $(`[slide-show-id=${currentPhotoIndex}]`).addClass('active-circle');
                $('#slideshow-photo').attr('src', `${slideShowPhotos[currentPhotoIndex].url}`)
                // $('#slideshow-photo').toggleClass('ball-in').delay(2000).toggleClass('ball-out');
                if (currentPhotoIndex >= 3) {
                    currentPhotoIndex = 0;
                } else {
                    currentPhotoIndex++;
                }
            }, 5000);
        };



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
        let resetRightMenu = () => {
            $('.nav-item-right').children('ul').slideUp();
        };

        let typeHeaderMessage = (heading) => {
            $('.header-text').empty();
            let ele = '<span>' + heading.split('').join('</span><span>') + '</span>';
            $(ele).hide().appendTo('.header-text').each(function (i) {
                $(this).delay(20 * i).css({
                    display: 'inline',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 1000);
            });
        };

        let resetBodyCircleColor = () => {
            $('.body-circle').each(function () {
                $(this).removeClass('active-circle');
            });
        };

        let resetModalCircleColor = () => {
            $('.modal-circle').each(function () {
                $(this).removeClass('active-circle');
            });
        };

        $('.nav-item-left').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });
        $('.nav-item-right').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });

        $('.left-menu-header-container').click(function () {
            let leftMenuContainerEl = $('.left-menu-container');
            if ($(leftMenuContainerEl).hasClass('left-menu-container-open')) $('.nav-links-left').fadeOut(1);
            else $('.nav-links-left').fadeIn(1);
            $(leftMenuContainerEl).toggleClass('left-menu-container-open left-menu-container-close');
            resetLeftMenu();
            $('.left-arrow').each(function () {
                switchLeftArrow(this);
            });
        });
        $('.right-menu-header-container').click(function () {
            let rightMenuContainerEl = $('.right-menu-container');
            if ($(rightMenuContainerEl).hasClass('right-menu-container-open')) $('.nav-links-right').fadeOut(1);
            else $('.nav-links-right').fadeIn(1);
            $(rightMenuContainerEl).toggleClass('right-menu-container-open right-menu-container-close');
            resetRightMenu();
            $('.right-arrow').each(function () {
                switchRightArrow(this);
            });
        });

        $('.body-circle').click(function () {
            resetBodyCircleColor();
            $(this).addClass('active-circle');
            currentPhotoIndex = getPhotoIndex($(this).attr('slide-show-id'));
            $('#slideshow-photo').attr('src', `${slideShowPhotos[currentPhotoIndex].url}`);
        });

        $('.modal-circle').click(function () {
            resetModalCircleColor();
            $(this).addClass('active-circle');
            currentPhotoIndex = getPhotoIndex(this);
            $(`[slide-show-id*=${currentPhotoIndex}]`).attr('src', `${slideShowPhotos[currentPhotoIndex].url}`);
        });

        $('.wrapper').click(function (e) {
            if (e.target !== $('.modal-container')) {
                $('.modal-container').fadeOut();
            }
        });



        startSlideShow();
        typeHeaderMessage("Hi, my name is Hung. Welcome to my personal site. Please checkout my links to learn more about me! Currently this only looks good on mobile view :D!");
    });
}