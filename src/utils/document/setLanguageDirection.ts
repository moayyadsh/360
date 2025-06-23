export const setLanguageDirection = (language: string) => {
  if (language === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.body.classList.remove('en');
    document.body.classList.add('ar');
  } else {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar');
    document.body.classList.add('en');
  }
};
