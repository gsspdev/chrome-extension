chrome.runtime.onMessage.addListener((message, sender, reply) => {
    console.log(message, sender, reply);
    reply('ok');
    if (message.type == 'background') {
        document.body.style.backgroundColor = message.color;
        return;
    }

    if (message.type != "image") {
        return;
    }

    if (message.src.indexOf('http') === 0) {
        window.open(message.src, 'blank');
    }
})