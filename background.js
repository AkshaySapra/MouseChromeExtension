chrome.runtime.onMessage.addListener(function(message,sender) {
  if (message.type === 'middle-click') {
    console.log(sender)
        chrome.windows.getAll(function(windows) {
        	    console.log(windows)
      if (windows.length > 1) {
      	      var otherWindow = windows.filter(function(w){
        return w.id != sender.tab.windowId;
      })[0];

        // There is more than one window open
        // Open a new tab in the other window
        chrome.tabs.create({url: message.link, windowId: otherWindow.id});
      } else {
        // There is only one window open
        // Open a new tab in the current window
        chrome.tabs.create({url: message.link});
      }
    });

  }
});
