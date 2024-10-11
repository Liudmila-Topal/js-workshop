/*
Example 1:
Single Quotes
 */
let str = 'Create String with Single Quote';

console.log(str);

/*
Example 2:
Double Quotes
 */
let str2 = "Create String with Double Quote";

console.log(str2);

/*
Example 3:
String Constructor
 */
let str3 = new String('Create String with String Constructor');

console.log(str3);

/*
Example 4:
Template Literals (String Interpolation)
 */
let str4 = 'Template Literal String';
let newStr = `String created using ${str4}`;

console.log(newStr);

/*
Example 5:
Empty String
 */
let str5 = '';
let str6 = "";

console.log("Empty String with Single Quotes: " + str5);
console.log("Empty String with Double Quotes: " + str6);

/*
Example 6:
Multiline Strings
 */
let str7 = `
    This is a
    multiline
    string`;

console.log(str7);