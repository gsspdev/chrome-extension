document.querySelector('button').addEventListener('click', () => {
    try {
        const tabs = await chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        });
        const activeTab = tabs[0];
        const response = await chrome.tabs.sendMessage(activeTab.id, {
            type: 'background' ,
            color: 'blue'
        })
        console.log(respose, 'response'); 
    }
    catch(e) {
        console.error(e);
    }
});
