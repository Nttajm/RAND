contentEl.addEventListener('keydown', (e) => {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
  
    const range = sel.getRangeAt(0);
    const container = range.startContainer;
  
    if (e.key === ' ' && container.nodeType === 3) {
      const text = container.textContent.trim();
  
      // If user types "- " and hits space
      if (text === '-') {
        e.preventDefault();
        container.textContent = '• ';
        placeCaretAtEnd(container);
      }
  
      // If line is just "•", and they hit space again -> exit bullet mode
      if (text === '•') {
        e.preventDefault();
        const parent = container.parentElement;
        container.textContent = ''; // clear the bullet
        placeCaretAtEnd(container);
      }
    }
  
    // On enter: add new bullet if line starts with bullet
    if (e.key === 'Enter') {
      const text = container.textContent.trim();
      if (text.startsWith('•')) {
        e.preventDefault();
        const newLine = document.createElement('div');
        newLine.innerHTML = '• ';
        newLine.contentEditable = true;
  
        if (container.nodeType === 3) {
          const parent = container.parentElement;
          parent.insertAdjacentElement('afterend', newLine);
          placeCaretAtEnd(newLine);
        } else {
          container.insertAdjacentElement('afterend', newLine);
          placeCaretAtEnd(newLine);
        }
      }
    }
  });
  
  // Helper to place cursor at the end
  function placeCaretAtEnd(el) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  