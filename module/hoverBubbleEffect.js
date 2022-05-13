function hoverBubbleBtnsEffect() {
  const bubbleButtons = document.querySelectorAll('.bubble-button');

  bubbleButtons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      e.target.classList.toggle('animate');
    });

    btn.addEventListener('mouseleave', (e) => {
      e.target.classList.toggle('animate');
    });
  });
}

export default hoverBubbleBtnsEffect;