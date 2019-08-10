$(document).ready(function(){
  $(".introBox").hide();
  event.preventDefault();
});
$(document).ready(function(){
  $(".introBox").delay(13000).show(500);
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


// HOVER BOX AND ANIMATION
let workHover = document.getElementsByClassName("workHover");
let boxWork = document.getElementsByClassName("boxWork");
workHover.addEventListener("mouseover", event => {
  boxWork.style.transform = "scale(1.2)"
});
