$(document).ready(function () {
  // 안내창 기능
  // 추가기능 : 스크롤바 없애기
  $("html").css("overflow", "hidden");

  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $("html").css("overflow", "auto");
  });

  let modalMain = $(".modal-main");
  // 내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $("html").css("overflow", "auto");
  });

  // 상단 헤더 스크롤 변경 코드
  let header = $(".header");
  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp > 0) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });
});

window.onload = function () {
  // 비주얼 슬라이드 관련
  let swVisual = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 800,
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  swVisual.on("slideChangeTransitionStart", function () {
    // 슬라이드의 실제 인덕스 번호: this.realIndex
    console.log(
      "slideChangeTransitionStart this.activeIndex",
      this.activeIndex
    );
    console.log("slideChangeTransitionStart this.realIndex ", this.realIndex);
    // 포커스 이동
    swVisualPageMove(this.realIndex);
  });

  // 비주얼 슬라이드 페이지네이션 관련
  let swVisualBt = $(".sw-visual-bt");
  let swVisualBar = $(".sw-visual-bar");

  // 활성화될 경우에 실행할 함수
  function swVisualPageMove(_index) {
    // 숫자의 클래스 제거
    swVisualBt.removeClass("sw-visual-bt-active");
    // 해당하는 숫자의 클래스 추가
    swVisualBt.eq(_index).addClass("sw-visual-bt-active");
    // 바의 클래스 제거
    swVisualBar.removeClass("sw-visual-bar-active");
    // 해당하는 바의 클래스 추가
    swVisualBar.eq(_index).addClass("sw-visual-bar-active");
  }
  // 버튼을 클릭했을때 슬라이드 및 포커스 제어
  $.each(swVisualBt, function (index, item) {
    // 버튼을 클릭하면 인덱스 를 함수로 전달해 준다.
    $(this).click(function () {
      // 슬라이드 즉시 이동
      swVisual.slideTo(index + 1);
      // 포커스 이동
      // swVisualPageMove(index);
    });
  });

  // 최초에는 0 번이 포커스
  swVisualPageMove(0);
};
