const filterBtns = document.querySelectorAll('.filter-btn');
const newsCards  = document.querySelectorAll('.news-card, .featured-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    newsCards.forEach(card => {
      const categoria = card.dataset.category;
      const mostrar   = filter === 'all' || categoria === filter;

      card.style.transition = 'opacity .3s, transform .3s';

      if (mostrar) {
        card.style.display    = '';
        card.offsetHeight;
        card.style.opacity    = '1';
        card.style.transform  = 'scale(1)';
      } else {
        card.style.opacity    = '0';
        card.style.transform  = 'scale(.97)';
        setTimeout(() => {
          if (card.style.opacity === '0') {
            card.style.display = 'none';
          }
        }, 300);
      }
    });
  });
});

