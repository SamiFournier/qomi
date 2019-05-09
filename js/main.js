//jQuery for page scrolling feature - requires jQuery Easing plugin
$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top-65
    }, 1500);
});


//post_form
var $form = $('form#sub_form'),
    url = 'https://script.google.com/macros/s/AKfycbykzUMz-ADyIxVI1OZK6oEKNlZnRIz2PP-nF-fwKpd6qfK8czc/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  console.log($form.serializeObject());
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done(
    // do something
    function(){
      console.log("Get OK");
    }
  );
})
