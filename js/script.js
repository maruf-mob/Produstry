$(document).ready(function(){
    'use strict';
    
    $('.banner-slider').slick({
        dots:false,
        arrows:true,
        autoplay:true,
        prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>',
    });
});