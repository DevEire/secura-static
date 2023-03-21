$(function() {
  $(".search-opener").click(function() {
    $(".search-bar").slideDown();
    $(".search-bar input[type='text']").focus();
  });

  $(".close-search").click(function() {
    $(".search-bar").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

  $(".dropdown").hover(function() {
    $(".dark-background").toggle();
  });

  $(".left-col").click(function() {
    $(".side-menu").css("left", "0");
    $(".dark-background").addClass("dark-background-mobile");
  });

  $(".dark-background, .side-menu-close").click(function() {
    $(".side-menu").css("left", "-100%");
    $(".dark-background").removeClass("dark-background-mobile");
  });

  $(".type-of-business div").click(function(){
    $(this).find(".fa-check").toggle();
  });
});
