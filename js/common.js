
//Scroll to Id
$("a[href*='#']").mPageScroll2id({
	offset: 75,
});
//Droped Menu
$(function(){
	 $('#navigation-xs').click(function(){
	 	$('#hidden-navigation-list').slideToggle('fast');
	 	return false;
	 });
});

//Click out of Droped Menu
$(document).mouseup(function (e) {
  var link = $('#navigation-xs'),
  		list = $('#hidden-navigation-list');

  if (e.target != link [0]
 	&& link.has(e.target).length === 0
  ){
    list.slideUp();
  }
});

//Click out of Hidden Navigation
$(function(){
	 $('#navigation-all').click(function(){
	 	$('#hidden-navigation-list-2').slideToggle('fast');
	 	return false;
	 });
});

$(document).mouseup(function (e) {
  var link = $('#navigation-all'),
  		list = $('#hidden-navigation-list-2');

  if (e.target != link [0]
 	&& link.has(e.target).length === 0
  ){
    list.slideUp();
  }
});


//Slider
$('.slider').slick({
	dots: false,
	arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

//The same width in comments--item
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
		);
	columns.height(tallestcolumn);
}

setEqualHeight($('.short-quote'));
setEqualHeight($('.post'));

$( "#accordion" ).accordion({
	collapsible: true,
	active: false,
	heightStyle: "content",
	icons: { "header": "ui-icon-plusthick ", "activeHeader": "ui-icon-minusthick" }
});

//Blocks animation
$(".gallery-item--img").animated("pulse", "fadeOut");
$(".specifics-item").animated("fadeIn", "fadeOut");
$(".comments--item").animated("fadeInUp", "fadeOut");
$(".delivery-descr--item").animated("flipInY", "fadeOut");
$(".section-title").animated("fadeInDown", "fadeOut");
$(".section-descr").animated("fadeInUp", "fadeOut");

//Pop-up	
$(".pop-up").magnificPopup({type:"inline", midClick: true});		

//Gallery
$('.gallery-popup-link').magnificPopup({
  type: 'image',
});

//Parallax in Social Block
$('.social').parallax({imageSrc: 'img/social-bg-lg.jpg'});

//Drop Down Navigation
$(window).scroll(function(){
var offset = document.documentElement.scrollTop,
		myObject = $(".drop-down-nav");

	if ((offset > 270) || $('body').scrollTop() > 270) { 
	myObject.slideDown();
	myObject.removeClass("hidden")
	} else {
		  myObject.slideUp();
			myObject.addClass("hidden")
		}
});
