
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
})(jQuery);