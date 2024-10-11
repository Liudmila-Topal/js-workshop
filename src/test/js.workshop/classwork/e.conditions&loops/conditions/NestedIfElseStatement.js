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

const weather = 'sunny';
const temperature = 26;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's cold outside");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
}