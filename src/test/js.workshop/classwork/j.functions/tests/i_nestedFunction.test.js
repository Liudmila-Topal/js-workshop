const MessageManager = require('../utils/i_nestedFunction');
const {beforeEach} = require("@jest/globals");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";
let manager;

beforeEach(() => {
    manager = new MessageManager();
});

test('should add a message correctly', () => {
    manager.addMessage('Hello World');
    expect(manager.messages).toContain('Hello World');
    logger.info("Message was added correctly")
});

test('should filter and format messages by a keyword', () => {
    manager.addMessage('Hello World');
    manager.addMessage('Hello Jest');
    manager.addMessage('Goodbye World');

    // TODO: Call getMessagesByKeyword() with parameter

    // TODO: Check that massages were filtered
});

// TODO: Add a test which should return an empty array if no messages match the keyword