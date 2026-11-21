
(() => {
  const buttons = document.querySelectorAll('.lang-button');
  const translatable = document.querySelectorAll('[data-es][data-en]');
  //const downloadButton = document.getElementById('cv-download');
  const downloadButtons = document.querySelectorAll('.cv-download');

  function setLanguage(language) {
    document.documentElement.lang = language;

    translatable.forEach((element) => {
      const value = element.getAttribute(`data-${language}`);
      if (value !== null) element.innerHTML = value;
    });

    buttons.forEach((button) => {
      const selected = button.dataset.lang === language;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    // Actualizar el PDF según el idioma (por ID)
    //if (downloadButton) {
      //downloadButton.href = language === 'en'
        //? 'assets/Resume_Herrera.pdf'
        //: 'assets/CV_Herrera.pdf';
    //}


    // Actualizar el PDF según el idioma (por CLASS)
    downloadButtons.forEach((button) => {
      button.href = language === 'en'
        ? 'assets/Resume_Herrera.pdf'
        : 'assets/CV_Herrera.pdf';
    });

    document.title = language === 'es'
      ? 'Alicia Herrera | Perfil Profesional'
      : 'Alicia Herrera | Professional Profile';
  }

  buttons.forEach((button) =>
    button.addEventListener('click', () => setLanguage(button.dataset.lang))
  );

  document.getElementById('year').textContent = new Date().getFullYear();
})();