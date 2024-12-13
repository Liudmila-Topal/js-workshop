class MessageManager {
    constructor() {
        this.messages = [];
    }

    // Add a new message to the list
    addMessage(message) {
        this.messages.push(message);
    }

    // Filter and format messages by a keyword
    getMessagesByKeyword(keyword) {
        const filterAndFormat = (messages) => {
            return messages
                .filter((msg) => msg.includes(keyword))
                .map((msg) => `Filtered: ${msg}`);
        };

        return filterAndFormat(this.messages);
    }

    // TODO: Create removeMessage() method with filter parameter
}

module.exports = MessageManager;