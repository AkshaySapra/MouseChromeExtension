chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.type === 'middle-click') {
    console.log(sender);
    chrome.windows.getAll({populate: true}, function(windows) {
      if (windows.length > 1) {
        var otherWindow = windows.find(w => w.id !== sender.tab.windowId);
        if (otherWindow) {
          // There is more than one window open
          // Open a new tab in the other window
          chrome.tabs.create({ url: message.link, windowId: otherWindow.id });
        } else {
          console.error('Other window not found.');
        }
      } else {
        // There is only one window open
        // Open a new tab in the current window
        chrome.tabs.create({ url: message.link });
      }
    });
  }
});
