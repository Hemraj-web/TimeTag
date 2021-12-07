


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















