document.querySelector('button').addEventListener('click', async () => {
    try {
        const tabs = await chrome.tabs.query({
            active: true,
        });
        const activeTab = tabs[0];
        console.log(tabs);
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
