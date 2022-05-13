function openModalMessage() {
  const messageBtns = document.querySelectorAll('[data-message]');
  const modalDiv = document.querySelector('#modal');
  const message = document.querySelector('.message');
  const iconClose = document.querySelector('.icon-close');

  function toggleModalMessage() {
    modalDiv.classList.toggle('hidden');
    message.classList.toggle('hidden');
  }

  messageBtns.forEach(btn => {
    btn.addEventListener('click', toggleModalMessage);
  });

  iconClose.addEventListener('click', toggleModalMessage);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleModalMessage();
    }
  });
}

export default openModalMessage;