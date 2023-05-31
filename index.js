(function () {
  'use strict';

  const hamburger = document.querySelector('.hamburger');
  const hiddenMenu = document.querySelector('.nav-menu-hidden');
  const links = document.querySelectorAll('.nav-menu-hidden a');
  const submitEmail = document.querySelectorAll('.form');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      hiddenMenu.classList.toggle('active');
    });
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hiddenMenu.classList.toggle('active');
  });

  $('#submit-form').validate();

  $('#submit-form').submit((event) => {
    event.preventDefault();

    if ($('#submit-form').valid()) {
      alert('Your form was successfully submitted!');
    }
  });
})();
