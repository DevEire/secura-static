let state = "?state=";

$(".dropdown-section #state").change(function() {
  state = "?state="; /* Reset everytime on change */

  $(".associates-container").fadeOut();
  if($(".dropdown-section #state").val() == 1) {
    $(".associates-container.arizona, .state-header").fadeIn();
    $(".state-header").fadeIn().text("Arizona");
    state += "arizona";;
  } else if($(".dropdown-section #state").val() == 2) {
    $(".state-header").fadeIn().text("Colorado");
    state += "colorado";
  }

  var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + state;
	window.history.pushState({ path: currentURL }, "", currentURL);
});

$(".dark-background, .close-modal").click(function() {
  $(".bio-modal, .dark-background").hide();
  $("body").css("overflow", "auto");
});

$("#rylan-bartz").click(function() {
  $("#rylan-bartz-modal, .dark-background").show();
  state = "?state=arizona";
  $("body").css("overflow", "hidden");

  var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + state + "&user=rylan-bartz";

	window.history.pushState({ path: currentURL }, "", currentURL);
});

$("#christina-calvert").click(function() {
  $("#christina-calvert-modal, .dark-background").show();
  state = "?state=arizona";
  $("body").css("overflow", "hidden");

  var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + state + "&user=christina-calvert";

	window.history.pushState({ path: currentURL }, "", currentURL);
});

if(window.location.href.indexOf("user=rylan-bartz") > 1) {
  $(".associates-container.arizona, #rylan-bartz-modal, .dark-background").show();
  $("body").css("overflow", "hidden");
} else if(window.location.href.indexOf("user=christina-calvert") > 1) {
  $(".associates-container.arizona, #christina-calvert-modal, .dark-background").show();
  $("body").css("overflow", "hidden");
}

if(window.location.href.indexOf("state=arizona") > 1) {
  $(".associates-container.arizona").show();
  $("#state option:eq(1)").prop("selected", true);
  $(".state-header").show().text("Arizona");
} else if(window.location.href.indexOf("state=colorado") > 1) {
  $(".associates-container.colorado").show();
  $("#state option:eq(2)").prop("selected", true);
  $(".state-header").show().text("Colorado");
}

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