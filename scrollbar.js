document.addEventListener('DOMContentLoaded', () => {
  const subfolder = document.querySelector('.subfolder');
  const fakeScrollbar = document.getElementById('fake-scrollbar');

  const thumb = document.createElement('div');
  thumb.classList.add('fake-scrollbar-thumb');
  fakeScrollbar.appendChild(thumb);

  function updateThumb() {
    const visibleRatio = subfolder.clientHeight / subfolder.scrollHeight;
    const thumbHeight = Math.max(visibleRatio * fakeScrollbar.clientHeight, 20);
    thumb.style.height = thumbHeight + 'px';

    const scrollRatio = subfolder.scrollTop / (subfolder.scrollHeight - subfolder.clientHeight);
    thumb.style.top = scrollRatio * (fakeScrollbar.clientHeight - thumbHeight) + 'px';
  }

  // Aktualisiere beim Scrollen
  subfolder.addEventListener('scroll', updateThumb);
  // Aktualisiere bei Fenstergröße
  window.addEventListener('resize', updateThumb);

  updateThumb();

  // Klick auf Fake-Scrollbar zum Scrollen
  fakeScrollbar.addEventListener('click', e => {
    const rect = fakeScrollbar.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const newScrollTop = (clickY / fakeScrollbar.clientHeight) * subfolder.scrollHeight;
    subfolder.scrollTop = newScrollTop;
  });
});
