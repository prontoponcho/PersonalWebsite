$(document).ready(function() {
	$('#fullpage').fullpage({

        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['section1', 'section2', 'section3'],
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

    $(document).on('click', '.section_2_link', function(){
        $.fn.fullpage.moveTo('section2', 0);
    });
    $(document).on('click', '.section_3_link', function(){
        $.fn.fullpage.moveTo('section3', 0);
    });
    $(document).on('click', '.slide_2_link', function(){
        $.fn.fullpage.moveTo('section2', 1);
    });
    $(document).on('click', '.slide_3_link', function(){
        $.fn.fullpage.moveTo('section2', 2);
    });
    $(document).on('click', '.slide_4_link', function(){
        $.fn.fullpage.moveTo('section2', 3);
    });
    $(document).on('click', '.slide_5_link', function(){
        $.fn.fullpage.moveTo('section2', 4);
    });
    $(document).on('click', '.slide_6_link', function(){
        $.fn.fullpage.moveTo('section2', 5);
    });
    $(document).on('click', '.slide_7_link', function(){
        $.fn.fullpage.moveTo('section2', 6);
    });
});
