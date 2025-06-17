const list = document.getElementById('subfolder');
const scrollbar = document.getElementById('fake-scrollbar');
const thumb = scrollbar.querySelector('::before'); // geht so nicht, deshalb direkt per JS

// Wir müssen den 'Thumb' separat ansprechen, also bauen wir ihn per JS:
const thumbEl = document.createElement('div');
thumbEl.style.position = 'absolute';
thumbEl.style.left = '0';
thumbEl.style.width = '100%';
thumbEl.style.background = 'black';
thumbEl.style.borderRadius = '4px';
thumbEl.style.transition = 'background 0.3s';
scrollbar.appendChild(thumbEl);

scrollbar.addEventListener('mouseenter', () => {
  thumbEl.style.background = '#444';
});
scrollbar.addEventListener('mouseleave', () => {
  thumbEl.style.background = 'black';
});

function updateThumb() {
  const visibleRatio = list.clientHeight / list.scrollHeight;
  const thumbHeight = Math.max(visibleRatio * scrollbar.clientHeight, 20);
  thumbEl.style.height = thumbHeight + 'px';
  const scrollRatio = list.scrollTop / (list.scrollHeight - list.clientHeight);
  thumbEl.style.top = scrollRatio * (scrollbar.clientHeight - thumbHeight) + 'px';
}

list.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
updateThumb();

// Scrollbar klicken/draggen: einfaches Scroll-on-Click
scrollbar.addEventListener('click', e => {
  const rect = scrollbar.getBoundingClientRect();
  const clickY = e.clientY - rect.top;
  const newScrollTop = (clickY / scrollbar.clientHeight) * list.scrollHeight;
  list.scrollTop = newScrollTop;
});
