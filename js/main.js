//jQuery for page scrolling feature - requires jQuery Easing plugin
$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top-65
    }, 1500);
});
