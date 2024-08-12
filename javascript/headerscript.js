//Javascript Document

jQuery(document).ready(function() {

  // 웹 메뉴
    $('.pnavi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(300);
    });
  
  // 모바일 메뉴
    $('.mnavi>li').click(function() {
      $(this).find('.msubmenu').stop().slideDown(300);
  }).mouseleave(function() {
      $(this).find('.msubmenu').stop().slideUp(300);
  });
});
