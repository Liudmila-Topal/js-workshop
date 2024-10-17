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

let day = 6;  // Example day

switch (day) {
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid input, please enter a number between 1 and 7");
}
