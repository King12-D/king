
// Select elements
const newsletterForm = document.querySelector('#newsletter form');
const whatsappButton = document.querySelector('#newsletter .button_2');
const darkModeToggles = document.querySelectorAll('.dark');
const showcaseImages = document.querySelectorAll('#showcase img');
const boxImages = document.querySelectorAll('#boxes .box img');

// Add event listeners
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    newsletterForm.classList.add('animate-shake'); // Add shake animation
    setTimeout(() => {
      newsletterForm.classList.remove('animate-shake');
    }, 1000); // Remove animation after 1 second
    alert('Thank you for subscribing to our newsletter!');
  });
}

if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    whatsappButton.classList.add('animate-bounce'); // Add bounce animation
    setTimeout(() => {
      whatsappButton.classList.remove('animate-bounce');
    }, 1000); // Remove animation after 1 second
    alert('CLICK OK TO MESSAGE US ON WHATSAPP!');
  });
}

if (darkModeToggles) {
  darkModeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggle.classList.toggle('animate-spin'); // Add spin animation
      setTimeout(() => {
        toggle.classList.remove('animate-spin');
      }, 1000); // Remove animation after 1 second
    });
  });
}

// Animate images on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  showcaseImages.forEach((image) => {
    const progress = scrollPosition / (image.offsetTop + image.offsetHeight);
    image.style.transform = `translateY(-${progress * 50}px)`;
  });

  boxImages.forEach((image) => {
    const progress = scrollPosition / (image.offsetTop + image.offsetHeight);
    image.style.transform = `translateY(-${progress * 50}px)`;
  });
});
// Select all product cards
const productCards = document.querySelectorAll('.product-card');

// Add event listener to each product card
productCards.forEach((card) => {
  // Add animation class when scrolling up
  window.addEventListener('scroll', () => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < 200) {
      card.querySelector('img').classList.add('slide-up');
    } else {
      card.querySelector('img').classList.remove('slide-up');
    }
  });

  // Add click event listener to each product card
  card.addEventListener('click', () => {
    card.querySelector('img').classList.toggle('bounce');
  });
});
