
 document.getElementById('inp').style.border="1px solid white";

 const sections = document.querySelectorAll("section");





function footInput() {
document.getElementById('inp').style.border = "1px solid black";
}


$( "#eve1" ).mouseover( function() {
console.log ("asmaaaa");
   $( "#eve" ).attr( "data-aos", "zoom-in" );

  });

/*
function gridHover() {
  document.getElementById('grid').style.border = "1px solid #5fcf80!important ";
console.log ("assssssssssssss");
} */
 //document.getElementById('grid').style.border = "1px solid #dee2e6";

 /*  document.getElementById('eve1').addEventListener("mouseover", function(){
     console.log ("asmaaaa");
   });
 */

$(document).ready( function() {

  $( ".grid" ).css( "border", "1px solid #dee2e6" );

$( ".grid" ).mouseover( function() {
//    document.getElementById('grid').style.border = "1px solid #5fcf80";

      $( this ).css( "border", "1px solid #5fcf80" );

  });
$( ".grid" ).mouseout( function() {

           $( this ).css( "border", "1px solid #dee2e6" );

    //document.getElementById('grid').style.border = "1px solid #dee2e6";
});



$(".topScroll").click( function () {
         $("html, body").animate({ scrollTop: "0" }, 1000);
           $("#topArrow").css( "display", "none" );
      } );

$("#topArrow").css( "display", "none" );

$(window).scroll (function(){

  $("#topArrow").css( "display", "inline" );

});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 500);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});


$( ".eve1" ).mouseover( function() {

    $( ".text-block" ).css("border-top", "5px solid #5fcf80");
    $(".eventLink").css({ 'cssText': 'color: #5fcf80!important' });
  //  $(".eve").css({ 'cssText': 'transform: scale(1.3)' });


  });


  $( ".eve1" ).mouseout( function() {

    $( ".text-block" ).css( "border", "1px solid #dee2e6" );
    $( ".eventLink" ).css("color", "#343a40");

  });


  $('.owl-carousel').owlCarousel();


});



//gridPoint:hover { color: #5fcf80 !important;}
//grid:hover {border: 1px solid #5fcf80!important; }
