chrome.runtime.onMessage.addListener((message, sender, reply) => {
    console.log(message, sender, reply);
    reply('ok');
    if (message.type != "image") {
        return;
    }

    if (message.src.indexOf('http') === 0) {
        window.open(message.src, 'blank');
    }
})