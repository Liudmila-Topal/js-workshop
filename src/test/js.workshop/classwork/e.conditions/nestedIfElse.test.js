const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/*
Pseudocode for checking the weather.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
START
  INPUT weather
  INPUT temperature

  IF weather = "sunny" THEN
    IF temperature > 30 THEN
      PRINT "It's a hot day"
    ELSE IF temperature > 20 THEN
      PRINT "It's a warm day"
    ELSE
      PRINT "It's cold outside"
    END IF
  ELSE IF weather = "rainy" THEN
    PRINT "Don't forget your umbrella"
  ELSE
    PRINT "Check the weather forecast"
  END IF
END
*/
test("Weather and temperature conditions", () => {
    const weather = 'sunny'; // Replace with test values as needed
    const temperature = 26; // Replace with test values as needed

    if (weather === "sunny") {
        if (temperature > 30) {
            logger.info("It's a hot day!");
        } else if (temperature > 20) {
            logger.info("It's a warm day.");
        } else {
            logger.info("It's cold outside");
        }
    } else if (weather === "rainy") {
        logger.info("Don't forget your umbrella!");
    } else {
        logger.info("Check the weather forecast!");
    }
});