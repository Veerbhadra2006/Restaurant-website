const searchIcon = document.getElementById('searchIcon');
  const searchBox = document.getElementById('searchBox');

  searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    const input = searchBox.querySelector('.search-input');
    if (searchBox.classList.contains('active')) {
      input.focus();
    }
  });

  
  const slider = document.querySelector('.slider');
  const leftBtn = document.querySelector('.slider-btn.left');
  const rightBtn = document.querySelector('.slider-btn.right');

  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -220, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 220, behavior: 'smooth' });
  });

