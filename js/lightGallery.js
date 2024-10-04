$(document).ready(function() {
    var slider = $('#publicMethods').lightSlider({
        slideMargin:4,
        slideWidth:200,
        loop:false
    });
    $('#goToSlide').click(function(){
        slider.goToSlide(3);
    });
    $('#goToPrevSlide').click(function(){
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').click(function(){
        slider.goToNextSlide();
    });
    $('#getCurrentSlideCount').click(function(){
        slider.getCurrentSlideCount();
    });
    $('#addSlide').click(function() {

        // Class 'lslide' needs to be added with new slide item
        var newEl = ' <li class="lslide"> <a href="javascript:void(0)"><img src="img/cS-1.jpg" /></a> </li>';
        $('#publicMethods').prepend(newEl);
        slider.refresh();
    });
    $('#play').click(function(){
        slider.play();
    });
    $('#pause').click(function(){
        slider.pause();
    });
    $('#destroy').click(function(){
        slider.destroy();
    });
    $('#rebuild').click(function(){
        if (!slider.lightSlider) {
            slider = $('#publicMethods').lightSlider({
                slideMargin:4,
                slideWidth:200,
                loop:false
            });
        }
    });
});