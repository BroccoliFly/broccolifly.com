$.fn.circle = function() {
  var element = this;
  var pos = 0;
  (function animate() {
      pos += 0.04;

      var radius = 20;
      var marginLeft = ($(window).width() / 2) - 160;
      var marginTop = 0;

      var dx = (radius * Math.cos(pos));
      var dy = (radius * Math.sin(pos));

      var fly = element[0];

      var translate = "translate(" + dx + "px," + dy + "px" + ")";
      var scale = "scale(" + (0.8 + Math.abs(Math.sin(pos)) * 0.2) + ")";

      fly.style.transform = scale + " " + translate;
      fly.style.webkitTransform = scale + " " + translate;
      fly.style.mozTransform = scale + " " + translate;
      fly.style.msTransform = scale + " " + translate;

      (requestAnimationFrame
        || webkitRequestAnimationFrame
        || mozRequestAnimationFrame
        || setTimeout
      )(animate, 40);
  })();
}

if ($(".fly").length > 0) {
  $(".fly").circle();
}

$(".navbar").headroom({"offset": 100});
