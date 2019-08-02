//initialisation slick
$(document).ready(function(){
  $('.testimonialsCarousel').slick({});
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$('.link-footer, .nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top-65
    }, 1500);
});

$('#vignette').click(function(){
  $('#video-frame').attr('src', 'https://www.youtube.com/embed/7lNpruCbijA?rel=0&autoplay=1&modestbranding=1"');
});

$('.modal').click(function(){
  $('#video-frame').attr('src', 'https://www.youtube.com/embed/7lNpruCbijA?rel=0&autoplay=0&modestbranding=1"');
});

// $('#myModal').on('hidden.bs.modal', function () {
//   $('#video-frame')[0].pause();
// })

//post_form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyXd7HEGZodsVu8QA3cVkpcI2pKj5saTBvFxM_aJAGsyeiBjFk/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('submit-to-google-sheet').classList.add("d-none");
  document.getElementById('formTitle1').classList.add("d-none");
  document.getElementById('formTitle2').classList.add("d-none");
  document.getElementById('modal_loader').classList.remove("d-none");
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_success').classList.remove("d-none");
    })
    .catch(error => {
      console.error('Error!', error.message);
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_error').classList.remove("d-none");
    })
})
