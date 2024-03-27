document.addEventListener('auxclick', function(event) {
  if (event.button === 1) {
    // Get the link element that was clicked
    let linkElement = event.target;
    while (linkElement && linkElement.tagName !== 'A') {
      linkElement = linkElement.parentNode;
    }

    // If a link element was found, open it in an existing window
    if (linkElement) {
      event.preventDefault();
      // Send a message to the background script
      chrome.runtime.sendMessage({ type: 'middle-click', link: linkElement.href });
    }
  }
});
