var chooseDate = document.querySelectorAll('.quick-write-date'); 
var quickWriteTop = document.querySelectorAll('.quick-write-top'); 

$(quickWriteTop[0]).attr("attrVal", 1); 
$(quickWriteTop[1]).attr("attrVal", 2); 
$(quickWriteTop[2]).attr("attrVal", 3); 

$(chooseDate[0]).attr("attr", 1); 
$(chooseDate[1]).attr("attr", 2); 
$(chooseDate[2]).attr("attr", 3); 

let height1 = $('#mast').height();
$('.card-top').css('height', height1)
let width1 = $('#mast').width()
$('.mycontainer').css('width', width1)
$('.quick-write-top').css('width', width1)
$('.mycontainer').css('height', height1)

chooseDate.forEach(function (date) { 

	let val=$(date).attr('attr') 
	let blockQWT=$('div[attrVal='+val+']') 
	let lastElem; 
	let lastVal; 
	let lastBlock; 
	date.addEventListener('click', function(event){ 
		lastElem=$('.gg') 
		lastVal=$(lastElem).attr('attr') 
		lastBlock=$('div[attrVal='+lastVal+']') 

	if(lastVal!=undefined){
		if($(this).attr('attr')<$(lastElem).attr('attr')) { 
			$(this).addClass('gg'); 
			$(lastElem).removeClass('gg'); 
			if ((lastElem).attr('attr')-$(this).attr('attr')==1){
				go(width1);
			}
			else go(2*width1);
			
			//setTimeout(function() { $(lastBlock).css('display','none') }, 100); 
			
			// $(lastBlock).css('display','none') 
			// $(blockQWT).animate({width: "show"},600) 

		} 
		if($(this).attr('attr')>$(lastElem).attr('attr')) { 
			$(this).addClass('gg'); 
			$(lastElem).removeClass('gg'); 
			if ($(this).attr('attr')-(lastElem).attr('attr')==1){
				go(-width1);
			}
			else go(-2*width1);
			//setTimeout(function() { $(lastBlock).css('display','none') }, 100); 
			
			// $(lastBlock).css('display','none') 
			// $(blockQWT).animate({width: "show", right:0},600) 

		} 
		if($(this).attr('attr')==$(lastElem).attr('attr')){ 
			date.classList.remove('gg'); 

			$('.mycontainer').animate({height: "hide"},500) 
			//$('.mycontainer').css('display', 'none')
			// $(blockQWT).parents().css( 'display', 'none' );
		} 
	}

		else { 
			date.classList.add('gg'); 
			//$(blockQWT).animate({height: "show"},500) 
			$('.mycontainer').animate({height: "show", bottom: 0},500) 
			//$('.mycontainer').css('display', 'block')
			if ($(this).attr('attr')==1)
			{
				$('.innerLiner').css('margin-left', '0px')
			}
			if ($(this).attr('attr')==2)
			{
				$('.innerLiner').css('margin-left', -width1)
			}
			if ($(this).attr('attr')==3)
			{
				$('.innerLiner').css('margin-left', -width1*2)
			}
			// $(blockQWT).parent().siblings('.innerLiner').css({'display': 'block'})
		} 
	}) 
});

function go(n){ // inner stuff slides left
	var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin + n); // extra 2 for border
	$( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
}

//анимация капля для нижнего меню
(function($) {
  //ripple-effect
  var parent, ink, d, x, y;
  $(".ripple").click(function(e){
    parent = $(this).parent();
 
    //создаём .ink элемент, если еще не создан
    if (parent.find(".ink").length == 0)
      parent.prepend("<span class='ink'></span>");
 
    ink = parent.find(".ink");
    //сбрасываем анимацию
    ink.removeClass("animate");
 
    //рассчитываем размеры .ink элемента
    //они определяются размерами родительского контейнера
    if(!ink.height() && !ink.width())
    {
       d = Math.max(parent.outerWidth(), parent.outerHeight());
       ink.css({height: d, width: d});
    }
 
    //установим координаты и запустим анимацию
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  }) 
})
;