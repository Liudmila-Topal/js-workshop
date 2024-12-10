const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/*
Pseudocode for switch case of week day
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
START
  INPUT day (1 for Monday, 2 for Tuesday, ..., 7 for Sunday)

  SWITCH day
    CASE 1:
      PRINT "It's Monday"
      BREAK
    CASE 2:
      PRINT "It's Tuesday"
      BREAK
    CASE 3:
      PRINT "It's Wednesday"
      BREAK
    CASE 4:
      PRINT "It's Thursday"
      BREAK
    CASE 5:
      PRINT "It's Friday"
      BREAK
    CASE 6:
      PRINT "It's Saturday"
      BREAK
    CASE 7:
      PRINT "It's Sunday"
      BREAK
    DEFAULT:
      PRINT "Invalid input, please enter a number between 1 and 7"
  END SWITCH
END
 */
test("Days of the week using switch statement", () => {
    const day = 6; // Replace with test values as needed

    switch (day) {
        case 1:
            logger.info("It's Monday"); 
            break;
        case 2:
            logger.info("It's Tuesday"); 
            break;
        case 3:
            logger.info("It's Wednesday"); 
            break;
        case 4:
            logger.info("It's Thursday"); 
            break;
        case 5:
            logger.info("It's Friday"); 
            break;
        case 6:
            logger.info("It's Saturday"); 
            break;
        case 7:
            logger.info("It's Sunday");
            break;
        default:
            logger.info("Invalid input, please enter a number between 1 and 7");
    }
});