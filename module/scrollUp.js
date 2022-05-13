function scrollUp() {
  const btnTop = document.querySelector('.btn-up');

  window.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight;
    btnTop.style.display = (window.scrollY > clientHeight / 4) ? 'block' : '';
  });

  btnTop.addEventListener('click', () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

export default scrollUp;