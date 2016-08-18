$(document).ready(function() {
	$('#fullpage').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $(document).on('click', '#slideTwo', function(){
        $.fn.fullpage.moveTo('page2', 1);
    });
    $(document).on('click', '#slideThree', function(){
        $.fn.fullpage.moveTo('page2', 2);
    });
    $(document).on('click', '#slideFour', function(){
        $.fn.fullpage.moveTo('page2', 3);
    });
    $(document).on('click', '#slideFive', function(){
        $.fn.fullpage.moveTo('page2', 4);
    });
    $(document).on('click', '#slideSix', function(){
        $.fn.fullpage.moveTo('page2', 5);
    });
    $(document).on('click', '#slideSeven', function(){
        $.fn.fullpage.moveTo('page2', 6);
    });
});
