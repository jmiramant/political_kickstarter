var Carousel = {
  current: 0,

  init: function() {
    $('.arrow.left').on('click', function() { Carousel.changeVideo(-1); });
    $('.arrow.right').on('click', function() { Carousel.changeVideo(1); });
  },

  changeVideo: function(num) {
    $('.featured-video.' + this.current).fadeOut(500);
    $('.icon-circle.' + this.current).css('color', '#545454');
    this.current = (this.current + num + 3) % 3;
    $('.featured-video.' + this.current).delay(501).fadeIn(500);
    $('.icon-circle.' + this.current).css('color', '#fece12');
  }
};

$(document).ready(function(){
  // featured video click & carousel
  Carousel.init();
  var autoRotate = setInterval(function() { Carousel.changeVideo(1); }, 5000);
  $('.arrow').on('click', function() { clearInterval(autoRotate); });

  // campaign grid
  $('.select-bar a').on('click', function(e) {
    e.preventDefault();
    var klass = $(this).attr('id');
    $('.select-bar a').removeClass("selected");
    $(this).addClass("selected");
    $('.campaign-snapshot').hide();
    $('.' + klass).fadeIn('slow');
  });
  jQuery(function() {
    $(".fancy_fancy").fancybox();
  });



});