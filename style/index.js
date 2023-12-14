// Get a reference to the button element
const backToTopBtn = document.getElementById('backToTopHeader');

// Add a click event listener to the button
backToTopBtn.addEventListener('click', () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});