//Prompts the user for their first name and store it in the variable Fname
var Fname = prompt("Please enter your first name:");

//Displays a welcome message that gets the user's name
alert("Welcome, " + Fname + "!");

//Creates the constant piValue to store the value of Pi to 7 significant digits
var piValue = 3.1415926;

//Asks the user to input their favorite number and store the value in myFavNum
var myFavNum = prompt("Please enter your favorite number:");

//Calculates the area of a circle using the user's favorite number as the radius
var myArea = piValue * Math.pow(myFavNum, 2);

//Displays everything to the webpage
document.write("Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. ");
document.write("If that was the radius of a circle, the circle’s area would be " + myArea.toFixed(6) + ".");
