$(document).ready(function () {
  var windowWidth = $("section").width();
  var bodyHeight = $("section").height();

  function createStars(target, numStars) {
    for (var i = 0; i < numStars; i++) {
      var toLeft = Math.random() * windowWidth;
      var toTop = Math.random() * bodyHeight;
      var starClass = "star-sm";
      var animationDelay = Math.random() * 5 + "s";

      if (i % 25 === 0) {
        starClass = "star-lg";
      } else if (i % 5 === 0) {
        starClass = "star-md";
      }

      $("<div>")
        .addClass(starClass)
        .css({
          top: toTop + "px",
          left: toLeft + "px",
          animationDelay: animationDelay
        })
        .appendTo(target);
    }
  }

  createStars(".top", 1500);
  $("section").addClass("loaded");
});
