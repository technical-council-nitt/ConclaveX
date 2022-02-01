let __sf = $(".sponsorsFooter ul span");
let __sf_cont = $(".sponsorsFooter ul");
let __title = $("#sponsorTitle");

__sf
  .mouseenter(function () {
    $(this).addClass("hover");
    __sf_cont.addClass("enter");
    let __setTitle = $(this).attr("data-group-title");
    __title.html(__setTitle);
  })
  .mouseleave(function () {
    $(this).removeClass("hover");
    __sf_cont.removeClass("enter");
    let __setTitle = $(__title).attr("data-default-title");
    __title.html(__setTitle);
  });
