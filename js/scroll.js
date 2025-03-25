$(window).on("load", function () {
    var $cover = $(".cover");
    var $title = $(".title");
    var $topBtn = $(".topBtn");

    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();
        $cover.css("transform", "translateY(" + (-scroll / 3) + "px)");
        $title.css("transform", "translateY(" + (scroll / 1.7) + "px)");
    });

    $title.find("div").each(function () {
        TweenMax.from(this, 1, {
            autoAlpha: 0,
            delay: Math.random(),
            ease: Power3.easeInOut
        });
    });

    TweenMax.to(window, 2, {
        scrollTo: { y: ".bottom" },
        delay: 2,
        ease: Power4.easeInOut
    });

    $topBtn.on("click", function () {
        TweenMax.to(window, 1, {
            scrollTo: { y: 0, autoKill: true },
            ease: Power3.easeInOut
        });
    });
});
