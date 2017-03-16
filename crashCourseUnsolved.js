// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var graham = "awesome";
var girlName = "Caroline";



// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var iceCream = ["chocolate", "vanilla", "strawberry"]


// Create an array of five numbers

var numbers = [1, 3, 5, 7, 9];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

var five = 5;
for (i = 0; i < five; i++) {
	console.log("My name is Bob");
}
// Create a for loop that loops through your five string array




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function math (x, y) {
  console.log(x/y);
};

math(2, 1);


// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function print (array) {
	for (i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

print(numbers);

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object


var drawer = {
	pencil: 2,
	pen: 1,
	crayon: 4
};

// Console log any three of the properties in that object

console.log(drawer.pencil);
console.log(drawer.pen);
console.log(drawer.crayon);

///or...create a loop

for (i = 0; i < 3; i++) {
	console.log()
}

// Create an Array of 5 Objects

var fridge = {
	lettuce: ["crisp", "fresh", "healthy"],
	yogurt: ["creamy", "rich", "tangy"],
	milk: ["smooth", ""],
	broccoli: ["bitter", "crunchy" ],
	grapes:["sweet"]
};

// Console log 3 properties for every one of the five objects

console.log(fridge.lettuce[0,1,2]);

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
