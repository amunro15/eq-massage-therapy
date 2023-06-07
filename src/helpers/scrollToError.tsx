export const scrollToError = () => {
  // getElementsByClassName returns elements in order top to bottom of DOM
  const inputErrors = document.getElementsByClassName('eq-input-error');
  const checkboxErrors = document.getElementsByClassName('eq-checkbox-error');

  const firstError = [...inputErrors, ...checkboxErrors][0];

  // Revisit - this should only fire if eq-input-error or eq-checkbox-error exists anyhow
  if (firstError) {
    window.scrollTo({
      top: firstError.getBoundingClientRect().top + window.scrollY - 5,
      behavior: 'smooth'
    });
  }

  return null;
};
