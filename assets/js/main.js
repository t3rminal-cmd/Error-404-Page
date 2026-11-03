// "Go back" returns to the previous page when there is one.
// With no history (a link opened in a new tab, or JavaScript turned off)
// the button follows its href to the home page instead.
document.querySelectorAll('[data-go-back]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
});
