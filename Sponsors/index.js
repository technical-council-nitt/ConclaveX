let __sf = $(".sponsorsFooter ul span");
let __sf_cont = $(".sponsorsFooter ul");

__sf
  .mouseenter(function () {
    $(this).addClass("hover");
    __sf_cont.addClass("enter");
  })
  .mouseleave(function () {
    $(this).removeClass("hover");
    __sf_cont.removeClass("enter");
  });
