// let tl = new TimelineMax({options});
// let tween = TweenMax.to($(".introBox"), 1, {
//   x: '-=50', // Tween to the current x value minus 50
//   y: '+=50', // Tween to the current y value plus 50
//   onComplete: myFunction,
//   ease:Back.easeOut
// });
// tl.add(tween, 1);

$(document).ready(function(){
  $(".playHover").hide();
  event.preventDefault();
});
$(document).ready(function(){
  $(".workHover").hide();
  event.preventDefault();
});
$(document).ready(function(){
  $(".navbar").hide();
  event.preventDefault();
});

$(document).ready(function(){
  $(".playHover").delay(15000).show(1000);
});
$(document).ready(function(){
  $(".workHover").delay(13000).show(1000);
});

$(document).ready(function(){
  $(".navbar").delay(14000).show(1000);
});




// $(document).ready(function() {
//   $("body").delay(1000).fadeIn(500);
// });
// $(document).ready(function() {
//   $("body").delay(11500).fadeOut(500);
// });

$(document).ready(function() {
  $("body").delay(1000).blur("8px");
});

// FADING IN/OUT "HELLO, FRIEND."
$(document).ready(function() {
  $(".contentPost").delay(1000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost").delay(2500).fadeOut(500);
});

// FADING IN/OUT "WELCOME TO MY PORTFOLIO"
$(document).ready(function() {
  $(".contentPost1").delay(5000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost1").delay(2500).fadeOut(500);
});

// FADING IN/OUT "HOPE YOU ENJOY"
$(document).ready(function() {
  $(".contentPost2").delay(9000).fadeIn(500);
});
$(document).ready(function() {
  $(".contentPost2").delay(2500).fadeOut(500);
});

// let noScale = document.getElementsByClassName("");
//
//


$(document).ready(function() {
  $(".workHover").hover(function () {
    $(".playHover").css("filter", "blur(4px)");
}, function(){
  $(".playHover").css("filter", "initial");
    })
  });
$(document).ready(function() {
  $(".playHover").hover(function () {
    $(".workHover").css("filter", "blur(4px)");
  }, function(){
    $(".workHover").css("filter", "initial");
  })
});


$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});


