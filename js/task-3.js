function checkForSpam(message) {
    const normMessage = message.toLowerCase();

    return normMessage.includes("spam") || normMessage.includes("sale");
}