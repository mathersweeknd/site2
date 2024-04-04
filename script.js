function animateBackground() {
    const background = document.querySelector('.background');
    const content = document.querySelector('.content');
    let move = 0;
  
    function moveElements() {
      move += 1;
      background.style.backgroundPositionX = move + 'px';
      content.style.left = move + 'px';
      requestAnimationFrame(moveElements);
    }
  
    moveElements();
  }
  
  window.addEventListener('load', animateBackground);