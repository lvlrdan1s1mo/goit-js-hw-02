function checkForSpam(message) {
    const normMessage = message.toLowerCase();

    return normMessage.incelubes("spam") || normMessage.incelubes("sale");
}