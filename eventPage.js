chrome.runtime.onInstalled.addListener(() => {
    // this allows us to add a persistent right-click listener for image on new tab 
  chrome.contextMenus.create({  
    id: 'image',
    title: 'Image on new tab',
    contexts: ['all'] // allows us to put right click on everything
  })
});

  chrome.contextMenus.onClicked.addListener(async (e) => {
    if (e.mediaType !== "image") {
      return;
    }
    try {
      const tabs = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
      });
      const activeTav = tabs[0];
      const response = await chrome.tabs.sendMessage(activeTab.id, {
        type: e.menuItemId,
        src: e.srcUrl
      })
      console.log(response, 'response');
    }
    catch(e) {
      console.error(e);
    }

});
