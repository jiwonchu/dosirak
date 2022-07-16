$(document).ready(function(){

  // 상단 헤더 스크롤 변경 코드
  let header = $('.header');
  $(window).scroll(function(){
    let temp = $(window).scrollTop();
    if(temp > 0) {
      header.addClass('header-active');
    }else{
      header.removeClass('header-active');
    }
  });
  

});

window.onload = function(){
  
}