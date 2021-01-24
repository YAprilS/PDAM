/**
 *
    Style ini dibuat khusus untuk lomba Web Design Competition - IT Holic -  STT Bandung
    =======================================================
    Copyright - YWAF Team 2018
    =======================================================
    [ACHMAD ADAM AZZURI]
    [GILANG PERMANA PUTRA]
    [NOVI KHARISMA]
 * 
 */

new WOW().init();

setTimeout(function(){        
    $('.giftunggu').delay(0).fadeOut('slow'); 
}, 1000);


$('.nav-toggle').on('click', function() {
  $(this).toggleClass('open');
  $('.menu-kiri').toggleClass('collapse');
});

$('.menu-kiri a').on('click', function() {
  $('.nav-toggle').removeClass('open');
  $('.menu-kiri').removeClass('collapse');
});

//Pencarian
function searchTrigger() {
  $('[data-js="search"]').on("click", function(e) {
    e.preventDefault();

    var searchCta = $(this),
      dataStatus = searchCta.attr("data-status"),
      dataTarget = searchCta.attr("data-target");
    "off" == dataStatus
      ? (searchCta.attr("data-status", "on"),
        $(searchCta).addClass("aktif tampil"),
        $(dataTarget).addClass("aktif"),
        setTimeout(function() {
          $(dataTarget)
            .find('input[type="search"]')
            .focus();
        }, 300))
      : (searchCta.attr("data-status", "off"),
        $(searchCta).removeClass("aktif"),
        $(dataTarget).removeClass("aktif"));
  }),
    $(".header-cari-tutup").on("click", function(e) {
      e.preventDefault(),
        $('[data-js="search"]').attr("data-status", "off"),
        $($('[data-js="search"]').attr("data-target")).removeClass("aktif"),
        $('[data-js="search"]').removeClass("aktif");
    });
}
searchTrigger();

//Header transparan
$(window).scroll(function() {    
var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("header").addClass("transparan");
  } else {
    $("header").removeClass("transparan");
  }
});

//Scroll-line
$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight = 
    
    $(document).height(), winheight = $(window).height();
      var scrolled = (wintop/(docheight-winheight))*100;
  
      $('.scroll-line').css('width', (scrolled + '%'));
});

//Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'id', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}

//Back to top
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,  
            easing: 'linear'
        });
    
    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});


var cards = document.querySelectorAll('.kartu');

function transition() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
}

cards.forEach(function (card) {
  return card.addEventListener('click', transition);
});

//Scroll

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});