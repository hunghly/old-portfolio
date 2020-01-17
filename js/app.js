{
    "use strict";
    $(document).ready(() => {
        let leftMenuContainerEl = $('.left-menu-container');
        let rightMenuContainerEl = $('.right-menu-container');
        let currentPhotoIndex = 1;

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

        let getPhotoIndex = (photo) => {
            let id = $(photo).attr('id');
            switch (id) {
                case 'slide-photo-1':
                    return 0;
                case 'slide-photo-2':
                    return 1;
                case 'slide-photo-3':
                    return 2;
                case 'slide-photo-4':
                    return 3;
                default:
                    return false;
            }
        };

        $('.fa-circle').click(function () {
            resetCircleColor();
            $(this).addClass('active-circle');
            currentPhotoIndex = getPhotoIndex(this);
            $('#slideshow-photo').attr('src', `${slideShowPhotos[currentPhotoIndex].url}`);
        });

        let startSlideShow = () => {
            let slideShowId = setInterval(() => {
                resetCircleColor();
                $(`#slide-photo-${currentPhotoIndex + 1}`).addClass('active-circle');
                $('#slideshow-photo').attr('src', `${slideShowPhotos[currentPhotoIndex].url}`)
                // $('#slideshow-photo').toggleClass('ball-in').delay(2000).toggleClass('ball-out');
                if (currentPhotoIndex >= 3) {
                    currentPhotoIndex = 0;
                } else {
                    currentPhotoIndex++;
                }
            }, 5000);
        };

        startSlideShow();
        typeHeaderMessage("Hi, my name is Hung. Welcome to my personal site. Please checkout my links to learn more about me! Currently this only looks good on mobile view :D!");
    });
}