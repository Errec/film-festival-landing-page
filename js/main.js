var scroolToSections = (function() {
  var moviesLink  = document.querySelector('.header__link-movies');
  var aboutLink   = document.querySelector('.header__link-about');
  var contactLink = document.querySelector('.header__link-contact');

  var moviesDiv  = document.querySelector('.movies');
  var aboutDiv   = document.querySelector('.infos-register');
  var contactDiv = document.querySelector('.contact');

  moviesLink.addEventListener('click', _scrollIntoMovies);
  aboutLink.addEventListener('click', _scrollIntoAbout);
  contactLink.addEventListener('click', _scrollIntoContact);

  function _scrollIntoMovies(e) {
    e.preventDefault();
    moviesDiv.scrollIntoView({ behavior: 'smooth' });
  }
  function _scrollIntoAbout(e) {
    e.preventDefault();
    aboutDiv.scrollIntoView({ behavior: 'smooth' });
  }
  function _scrollIntoContact(e) {
    e.preventDefault();
    contactDiv.scrollIntoView({ behavior: 'smooth' });
  }
})();
