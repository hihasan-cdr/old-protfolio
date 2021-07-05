new TypeIt(".element",{
    strings:["A Responsive Designer", "WordPress Developer" , "Full Stack Web Developer"],
    breakLines:false,
    loop: true,
    cursorSpeed: 4000,
  
  
}).go();

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 15,
        time: 1000,

    });
});




var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});


$(window).scroll(function() {
    var sticky = $('.navbar'),
      scroll = $(window).scrollTop();
  
    if (scroll >= 40) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).scroll(function(){
    if($(this).scrollTop() > 50)
    {   
        $('.navbar-brand').css({"padding-left":"40px"});
        $('header .bg-darks').css({"background":"rgba(0,0,0,.5)"});
    }else{
        $('header .bg-darks').css({"background":"transparent"});
    

    }
});






var tops = $(window).scroll(function(){

    var hh = $(document).scrollTop();
    

if(hh>2310){
    $('.html').css({
        'width' : '90%',
        'transition' : '3s'
    });
}else{}



if(hh>2310){
    $('.css').css({
        'width' : '80%',
        'transition' : '3s'
    });
}else{}



if(hh>2330){
    $('.jquery').css({
        'width' : '85%',
        'transition' : '3s'
    });
}else{}


if(hh>2330){
    $('.javascript').css({
        'width' : '90%',
        'transition' : '3s'
    });
}else{}

});




/*==================================
            protfolio
====================================*/

$(window).on('load', function () {

    var $projects = $('#isotope-container');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });


    //filter items on button click
    $('#isotope-filter').on('click', 'button', function () {

        //get filter value
        var rafi = $(this).attr('data-filter');

        //filter protfolio
        $projects.isotope({
            filter: rafi,
        });

        //active button
        $('#isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});