
//depth2 마우스 올렸을때
$(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
});

//mgnb
$(".btn_ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});
$(".btn_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});