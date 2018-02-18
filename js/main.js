var scroolToSections = (function() {
  var moviesLink  = document.querySelector('.header__link-movies');
  var aboutLink   = document.querySelector('.header__link-about');
  var heroBtn   = document.querySelector('.hero__btn');
  var contactLink = document.querySelector('.header__link-contact');

  var moviesDiv  = document.querySelector('.movies');
  var aboutDiv   = document.querySelector('.infos-register');
  var registerDiv   = document.querySelector('.register');
  var contactDiv = document.querySelector('.contact');

  moviesLink.addEventListener('click', _scrollIntoMovies);
  aboutLink.addEventListener('click', _scrollIntoAbout);
  heroBtn.addEventListener('click', _scrollIntoRegister);
  contactLink.addEventListener('click', _scrollIntoContact);

  function _scrollIntoMovies(e) {
    e.preventDefault();
    moviesDiv.scrollIntoView({ behavior: 'smooth' });
  }
  function _scrollIntoAbout(e) {
    e.preventDefault();
    aboutDiv.scrollIntoView({ behavior: 'smooth' });
  }

  function _scrollIntoRegister(e) {
    e.preventDefault();
    registerDiv.scrollIntoView({ behavior: 'smooth' });
  }

  function _scrollIntoContact(e) {
    e.preventDefault();
    contactDiv.scrollIntoView({ behavior: 'smooth' });
  }
})();
