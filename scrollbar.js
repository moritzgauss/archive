const list = document.getElementById('subfolder');
const scrollbar = document.getElementById('fake-scrollbar');

// Erstelle den Thumb (Scroll-Indikator)
const thumb = document.createElement('div');
thumb.classList.add('fake-scrollbar-thumb');
scrollbar.appendChild(thumb);

function updateThumb() {
  const visibleRatio = list.clientHeight / list.scrollHeight;
  const thumbHeight = Math.max(visibleRatio * scrollbar.clientHeight, 20);
  thumb.style.height = thumbHeight + 'px';

  const scrollRatio = list.scrollTop / (list.scrollHeight - list.clientHeight);
  thumb.style.top = scrollRatio * (scrollbar.clientHeight - thumbHeight) + 'px';
}

list.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
updateThumb();

scrollbar.addEventListener('click', e => {
  const rect = scrollbar.getBoundingClientRect();
  const clickY = e.clientY - rect.top;
  const newScrollTop = (clickY / scrollbar.clientHeight) * list.scrollHeight;
  list.scrollTop = newScrollTop;
});
