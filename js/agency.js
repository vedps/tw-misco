/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        title= $(this).attr('title');
        tttop=$($anchor.attr('href')).offset().top
        if(title == "cont") tttop=tttop-40;
        $('html, body').stop().animate({
            scrollTop:tttop
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $(window).bind('scroll',function(){
      //  $("nav#navo").addClass('navbar-shrink');
        //    $("li #hum").attr('href',"#page-top");
       // $('.navbar-toggle:visible').click();
    });
});

// Highlight the top nav as scrolling occurs
//$('body').scrollspy({
//    target: '.navbar-fixed-top'
//})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});