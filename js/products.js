window.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    let animatedUp = true;
    let animatedDown = false;

    window.addEventListener('scroll', () => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      if (cardTop > 0 && !animatedUp) {
        card.classList.add('animate-up');
        animatedUp = true;
      }

      if (cardBottom > 0 && !animatedDown) {
        card.classList.add('animate-down');
        animatedDown = true;
      }
    });
  });
});