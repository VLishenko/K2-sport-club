//Droped Menu
$(function(){
	 $('.hidden-navigation a').click(function(){
	 	$('#hidden-navigation-list').slideToggle('fast');
	 	return false;
	 });
});

//Click out of Droped Menu
$(document).mouseup(function (e) {
  var link = $('.hidden-navigation a'),
  		list = $('#hidden-navigation-list');

  if (e.target != link [0]
 	&& link.has(e.target).length === 0
  ){
    list.slideUp();
  }
});

//Turn off menu links
$('.hidden-navigation-list a').click(function() {
	return false;
})

//Slider
$('.slider').slick({
	dots: false,
	arrows: false,
  infinite: true,
  speed: 500,
	responsive: [
	{
	  breakpoint: 992,
	  settings: {
	  	arrows: true,
	  }
	}]
});
