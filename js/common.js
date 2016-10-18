//Slider Auto Height
var topMargin = 0; //Default margin

function height_Detect( myObject, topMargin ) {
	//myObject - height of our block
	//topMargin - Margin
	topMargin = topMargin || 0; //Deafult Margin

	var windowHeight = parseInt($(window).height()), //Detect window height
			blochHeight = windowHeight - topMargin; // Height of the Navigation

	if (windowHeight <= 480) { //Window height leth than 480px
		myObject.css("height", 480 - topMargin);
	} else if (windowHeight > 700){ //Window height more than 700px
		myObject.css("height", 700 - topMargin);
	} else {
		myObject.css("height", windowHeight-topMargin); //Window height between 480px and 700px
	}
};

height_Detect($('div[class*="slider-item-"]'), 110);


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
// $(".specifics-item").animated("fadeIn", "fadeOut");
$(".comments--item .image").animated("fadeIn", "fadeOut");
$(".delivery-descr--item img").animated("fadeIn", "fadeOut");
$(".section-title").animated("fadeInDown", "fadeOut");
// $(".section-descr").animated("fadeInUp", "fadeOut");

//Pop-up	
$(".pop-up").magnificPopup({type:"inline", midClick: true});		

//Gallery
$('.gallery-popup-link').magnificPopup({
  type: 'image',
});

//Parallax in Social Block
$('.social').parallax({imageSrc: 'img/social-bg-lg.jpg'}).trigger('resize').trigger('scroll');


jQuery(function(f){
	var element = f('.drop-down-nav');
	element.hide();
	f(window).scroll(function(){
		element['fade'+ (f(this).scrollTop() > 400 ? 'In': 'Out')](200);           
	});
});  


$(window).trigger('resize').trigger('scroll');