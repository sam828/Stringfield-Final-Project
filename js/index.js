$(".menu").on("click", function(){
$("ul").animate({
  left: 0
})
});

$(".menu").on("click", function(){
	$('ul').animate({
		left:"100%"
	});
	});

$(window).on("resize", function(){
$('.menu').removeAttr("style");
});

