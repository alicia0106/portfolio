(() => {
  const buttons = document.querySelectorAll('.lang-button');
  const translatable = document.querySelectorAll('[data-es][data-en]');
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
    document.title = language === 'es'
      ? 'Martha A Herrera G | Perfil profesional'
      : 'Martha A Herrera G | Professional Profile';
  }
  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
