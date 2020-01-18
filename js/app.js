{
    "use strict";
    $(document).ready(() => {
        let modalContainerEl = $('.modal-container');
        let modalPhotoContainerEl = $('#modal-photo-container');
        let slideShowPhotoEl = $('#slideshow-photo');
        let modalPhotoEl = $('#modal-photo');
        let modalShowId;
        let currentPhotoIndex = 0;
        let currentModalIndex = 0;

        let slideShowPhotos = [
            {
                alt: 'a frontal photo of me in the military uniform',
                src: './img/senior-airman-cropped.jpg'
            },
            {
                alt: 'a photo of me at mt. fuji',
                src: './img/mt-fuji.jpg'
            },
            {
                alt: 'a photo of us at the aquarium',
                src: './img/aquarium.jpg'
            },
            {
                alt: 'a photo of me and a group of friends',
                src: './img/the-guys.jpeg'
            },
        ];

        let familyPhotos = [
            {
                alt: 'some baby photos',
                src: './img/baby.jpg'
            },
            {
                alt: 'a photo of young me playing games',
                src: './img/gaming.jpg'
            },
            {
                alt: 'a photo of us with ALS award',
                src: './img/wife-award.jpg'
            },
            {
                alt: 'a photo of us at the dinner table',
                src: './img/family.jpg'
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
            $(slideShowPhotoEl).attr('src', `${slideShowPhotos[currentPhotoIndex].src}`);
            $(slideShowPhotoEl).attr('alt', `${slideShowPhotos[currentPhotoIndex].alt}`);
            currentPhotoIndex++;
            let slideShowId = setInterval(() => {
                resetBodyCircleColor();
                $(`[slide-show-id=${currentPhotoIndex}]`).addClass('active-circle');
                $(slideShowPhotoEl).attr('src', `${slideShowPhotos[currentPhotoIndex].src}`);
                $(slideShowPhotoEl).attr('alt', `${slideShowPhotos[currentPhotoIndex].alt}`);
                // $('#slideshow-photo').toggleClass('ball-in').delay(2000).toggleClass('ball-out');
                if (currentPhotoIndex === 3)currentPhotoIndex = 0;
                else currentPhotoIndex++;
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
            let leftMenuContainerEl = $('.left-menu-container');
            if ($(leftMenuContainerEl).hasClass('left-menu-container-open')) $('.nav-links-left').fadeOut(1);
            else $('.nav-links-left').fadeIn(1);
            $(leftMenuContainerEl).toggleClass('left-menu-container-open left-menu-container-close');
            $('.nav-item-left').children('ul').slideUp();
        };
        let resetRightMenu = () => {
            let rightMenuContainerEl = $('.right-menu-container');
            if ($(rightMenuContainerEl).hasClass('right-menu-container-open')) $('.nav-links-right').fadeOut(1);
            else $('.nav-links-right').fadeIn(1);
            $(rightMenuContainerEl).toggleClass('right-menu-container-open right-menu-container-close');
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
        /*-----Event Listeners-----*/
        $('.nav-item-left').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });
        $('.nav-item-right').children('h3').click(function () {
            $(this).next().slideToggle(200);
        });

        $('.left-menu-header-container').click(function () {
            resetLeftMenu();
            $('.left-arrow').each(function () {
                switchLeftArrow(this);
            });
        });

        $('.right-menu-header-container').click(function () {
            resetRightMenu();
            $('.right-arrow').each(function () {
                switchRightArrow(this);
            });
        });

        let getPhotoObj = (flag) => {
            switch (flag) {
                case 'family':
                    return familyPhotos;
                default:
                    return false;
            }
        };

        let createPhotoHTML = (photoObj) => {
            let htmlString = "";
            for (let i = 0; i < photoObj.length; i++) {
                if (i === 0) {
                    htmlString += `<i class="fas fa-circle modal-circle active-circle" modal-photo-id="${i}"></i>`
                } else {
                    htmlString += `<i class="fas fa-circle modal-circle" modal-photo-id="${i}"></i>`
                }
            }
            $(modalPhotoContainerEl).html(htmlString);
            modalCircleListener(photoObj);
        };

        let addBlur = () => {
            $('.body-container, .left-menu-container, .right-menu-container').addClass('blurred');
        };
        let removeBlur = () => {
            $('.body-container, .left-menu-container, .right-menu-container').removeClass('blurred');
        };

        let setModalPhoto = (photoObj) => {
            $(modalPhotoEl).attr('src', `${photoObj[currentModalIndex].src}`);
            $(modalPhotoEl).attr('alt', `${photoObj[currentModalIndex].alt}`);
        };

        let startModalShow = (photoObj) => {
            addBlur();
            setModalPhoto(photoObj);
            currentModalIndex++;
            modalShowId = setInterval(() => {
                resetModalCircleColor();
                $(`[modal-photo-id=${currentModalIndex}]`).addClass('active-circle');
                setModalPhoto(photoObj);
                // $('#slideshow-photo').toggleClass('ball-in').delay(2000).toggleClass('ball-out');
                if (currentModalIndex === photoObj.length - 1) currentModalIndex = 0;
                else currentModalIndex++;
            }, 5000);
        };

        /*-----Displays the family photos when clicked-----*/
        $('#family').click(function () {
            $(modalContainerEl).fadeIn()
            let photoObject = getPhotoObj($(this).attr('id'));
            currentModalIndex = 0;
            createPhotoHTML(photoObject);
            startModalShow(photoObject);
        });

        /*-----Circle Select Event Listeners-----*/
        $('.body-circle').click(function () {
            resetBodyCircleColor();
            $(this).addClass('active-circle');
            currentPhotoIndex = getPhotoIndex($(this).attr('slide-show-id'));
            $('#slideshow-photo').attr('src', `${slideShowPhotos[currentPhotoIndex].src}`);
        });

        let modalCircleListener = (photoObj) => {
            $('.modal-circle').click(function () {
                resetModalCircleColor();
                $(this).addClass('active-circle');
                currentModalIndex = getPhotoIndex($(this).attr('modal-photo-id'));
                setModalPhoto(photoObj);
            });
        };

        $('.wrapper').click(function (e) {
            // console.log(typeof e.target);
            // console.log($(e.target).hasClass('link-item'));
            // console.log(e.target);
            // console.log($('.link-item'));
            if (e.target !== $(modalContainerEl) && !$(e.target).hasClass('link-item')) {
                $(modalContainerEl).fadeOut();
                clearInterval(modalShowId);
                removeBlur();
            }
        });

        $(modalContainerEl).hide();
        startSlideShow();
        typeHeaderMessage("Hi, my name is Hung. Welcome to my personal site. Please checkout my links to learn more about me! Currently this only looks good on mobile view :D!");
    });
}