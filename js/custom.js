


// Header Scroll

let nav = document.querySelector(".navbar");

window.onscroll = function (){
    if(document.documentElement.scrollTop > 20 ){
        nav.classList.add("header_scrolled");
    }

    else{
        nav.classList.remove("header_scrolled");
    }
}


// banner video popup

window.document.onkeydown = function(e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}


var $ = jQuery.noConflict();


    $('.offerItemTitle').click(function(){

        $(this).parents('.offerslide').children('.offerItem').removeClass('active');
        $(this).parents('.offerslide').children('.offerItem').children('.offerItemTitle').removeClass('hide');
        $(this).parent('.offerItem').addClass('active');
        $(this).addClass('hide');

    });


    $(document).ready(function(){
        $(".topProfit_desktop .accordition__offer-desktop li:not(:first-child)").click(function(){
            var target_title = $(this).find('.offer__desktop__inactive-content').html();
            var target_dec = $(this).find('.offer__desktop__active-content').html();

            var target_color = $(this).data("color");

            var temp_title = $(".offer-horizontal-desktop__item-1 .offer__desktop__inactive-content").html();
            var temp_dec = $(".offer-horizontal-desktop__item-1 .offer__desktop__active-content").html();

            var temp_color =$(".offer-horizontal-desktop__item-1").data("color");

            $(".offer-horizontal-desktop__item-1 .offer__desktop__inactive-content").fadeOut(500);
            $(".offer-horizontal-desktop__item-1 .offer__desktop__active-content").fadeOut(500);
            setTimeout(function(){
                $(".offer-horizontal-desktop__item-1 .offer__desktop__active-content").css("background",target_color);
                $(".offer-horizontal-desktop__item-1 .offer__desktop__inactive-content").html(target_title);
                $(".offer-horizontal-desktop__item-1 .offer__desktop__active-content").html(target_dec);
            }, 1000);

            $(this).find('.offer__desktop__inactive-content').css("background",temp_color);

            $(".offer-horizontal-desktop__item-1 .offer__desktop__inactive-content").fadeIn(500);
            $(".offer-horizontal-desktop__item-1 .offer__desktop__active-content").fadeIn(500);

            $(this).find('.offer__desktop__inactive-content').html(temp_title);
            $(this).find('.offer__desktop__active-content').html(temp_dec);
            $(".offer-horizontal-desktop__item-1").data("color",$(this).data("color"));
        })
    })



