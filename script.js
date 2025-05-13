// Интерактивность с анимацией
document.querySelectorAll('.section h2').forEach(header => {
  header.addEventListener('click', function() {
    const section = this.parentElement;
    const topics = section.querySelectorAll('.topic');
    
    if (section.classList.contains('collapsed')) {
      section.classList.remove('collapsed');
      topics.forEach((topic, index) => {
        setTimeout(() => {
          topic.style.opacity = '1';
          topic.style.maxHeight = '200px';
        }, index * 100);
      });
    } else {
      topics.forEach((topic, index) => {
        setTimeout(() => {
          topic.style.opacity = '0';
          topic.style.maxHeight = '0';
        }, index * 100);
      });
      setTimeout(() => section.classList.add('collapsed'), 300);
    }
  });
});