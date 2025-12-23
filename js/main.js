AOS.init({
  duration: 1000, //1초
  dealy: 0,
});

//menu
$(".menu_img li").hide();
$(".menu_img li.churros").show();

// 버튼 클릭 시 해당 카테고리만 표시
$(".menu_tab button").click(function () {
  let idx = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");

  if (idx === 0) {
    $(".menu_img li").hide();
    $(".menu_img li.churros").fadeIn();
  } else if (idx === 1) {
    $(".menu_img li").hide();
    $(".menu_img li.coffee").fadeIn();
  } else if (idx === 2) {
    $(".menu_img li").hide();
    $(".menu_img li.drink").fadeIn();
  }
});


//shop
const shop_list = new Swiper(".shop_list", {
 slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    centeredSlides: true, //기본값 false
    loop: true, //슬라이드반복
    autoplay: { // 자동슬라이드
        delay: 3000, // 3초 대기시간
        disableOnInteraction: false, //스와이프 후 자동 재생 비활성화 되지 않음
    },
});
