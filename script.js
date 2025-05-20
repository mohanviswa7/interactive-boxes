document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    // Collapse all boxes
    document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
    // Expand clicked one
    box.classList.add('expanded');
  });
});
