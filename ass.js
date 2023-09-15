"use strict";
/*// Store the person's name in a variable
var personName: string = "Eric";

// Create a message and print it
var message: string = `Hello ${personName}, would you like to learn some TypeScript today?`;

console.log(message);*/
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/* Store the person's name in a variable
const personName: string = "John Doe";

// Define the transformations
const transformations: [(name: string) => string, string][] = [
  [(name) => name.toLowerCase(), "Lowercase"],
  [(name) => name.toUpperCase(), "Uppercase"],
  [(name) => toTitleCase(name), "Titlecase"],
];

// Function to convert to titlecase
function toTitleCase(name: string): string {
  const words = name.split(" ");
  const titlecasedWords = words.map((word) => {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return titlecasedWords.join(" ");
}

// Loop through the transformations and print
for (const [transform, caseName] of transformations) {
  const transformedName = transform(personName);
  console.log(`Name in ${caseName}: ${transformedName}`);
}*/
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
/*function printFamousQuote(quote: string, author: string) {
    console.log(`${author} once said, "${quote}"`);
}

const famousQuote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";

printFamousQuote(famousQuote, author);*/
/*   5 Store the famous person's name in a variable
var famous_person: string = "Albert Einstein";

// Compose  message
var message: string = `Hello there! I want to tell you about ${famous_person}, who is a famous person known for their incredible contributions to science and physics. ${famous_person} is widely recognized for their theory of relativity and their work on the photoelectric effect, which earned them the Nobel Prize in Physics in 1921. Their work has had a profound impact on our understanding of the universe.`;

// Print  message
console.log(message);*/
// Store a person's name with whitespace characters
//var nameWithWhitespace: string = "\t  John Doe\n";
// Print the name with leading and trailing whitespace
//console.log("Name with whitespace: ");
//console.log(nameWithWhitespace);
// Remove the leading and trailing whitespace and print the cleaned name
//var cleanedName: string = nameWithWhitespace.trim();
//console.log("\nName after stripping whitespace: ");
//console.log(cleanedName);
//7 // Addition operation
/*var additionResult: number = 5 + 3;
console.log("Addition Result: " + additionResult);

// Subtraction operation
var subtractionResult: number = 15 - 7;
console.log("Subtraction Result: " + subtractionResult);

// Multiplication operation
var multiplicationResult: number = 4 * 2;
console.log("Multiplication Result: " + multiplicationResult);

// Division operation
var divisionResult: number = 64 / 8;
console.log("Division Result: " + divisionResult);*/
//8
//console.log(5 + 3);
//console.log(10 - 2);
//console.log(4 * 2);
//console.log(16 / 2);
//9
/* Store your favorite number in a variable
var favoriteNumber: number = 42;

// Create a message revealing your favorite number
var message: string = `My favorite number is ${favoriteNumber}.`;

// Print the message
console.log(message);*/
//11
/*
// Create an array called 'names' with your friends' names
const names: string[] = ["Ali", "Aslam", "Akram", "Azam", "Atif"];

// Print each person's name one at a time
console.log("My friends' names:");

for (const name of names) {
  console.log(name);
}

//12


/* Create an array called 'names' with your friends' names
const names: string[] = ["Ali", "Azam", "Aslam", "Atif", "Anwar"];

// Print a personalized message to each person
for (const name of names) {
  console.log(`Hello, ${name}! Have a great day.`);
}*/
//13
/* Create an array of places to visit
const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Machu Picchu", "Venice"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the original order
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order (again):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);*/
//20
/* Create an array of countries
const countries: string[] = ["United States", "Canada", "United Kingdom", "Australia", "France", "Germany", "Japan", "China", "Brazil", "India"];

// Print the list of countries
console.log("List of Countries:");
for (const country of countries) {
    console.log(country);
}*/
//21
/* Create an array of country objects

const countries = [
    {
        name: "United States",
        population: 331002651,
        capital: "Washington, D.C."
    },
    {
        name: "Canada",
        population: 37742154,
        capital: "Ottawa"
    },
    {
        name: "United Kingdom",
        population: 67886011,
        capital: "London"
    },
    {
        name: "Australia",
        population: 25499884,
        capital: "Canberra"
    },
    {
        name: "France",
        population: 65273511,
        capital: "Paris"
    }
];

// Print information about each country
console.log("Country Information:");
for (const country of countries) {
    console.log(`Name: ${country.name}`);
    console.log(`Population: ${country.population}`);
    console.log(`Capital: ${country.capital}`);
    console.log("------");
}*/
//22
/* Create an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Attempt to access an element beyond the array length (causing an index error)
const indexToAccess = 10;
try {
    console.log(`Element at index ${indexToAccess}: ${numbers[indexToAccess]}`);
} catch (error) {
    console.error(`An error occurred: ${error}`);
}

// Correct the error by accessing a valid index
const validIndex = 2;
console.log(`Element at index ${validIndex}: ${numbers[validIndex]}`);
cls*/
//23
/*let car = 'subaru';

// Test 1: Equality Test (True)
console.log("Test 1: Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2: Equality Test (False)
console.log("Test 2: Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

// Test 3: Inequality Test (True)
console.log("Test 3: Is car != 'ford'? I predict True.");
console.log(car != 'ford'); // True

// Test 4: Inequality Test (False)
console.log("Test 4: Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

// Test 5: Greater Than Test (False)
const myAge = 30;
console.log("Test 5: Is myAge > 40? I predict False.");
console.log(myAge > 40); // False

// Test 6: Less Than Test (True)
const yourAge = 25;
console.log("Test 6: Is yourAge < 40? I predict True.");
console.log(yourAge < 40); // True

// Test 7: Logical AND Test (True)
const isSunny = true;
const isWarm = true;
console.log("Test 7: Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); // True

// Test 8: Logical OR Test (False)
const isRainy = true;
const isCold = false;
console.log("Test 8: Is it rainy or cold? I predict False.");
console.log(isRainy || isCold); // True

// Test 9: Logical NOT Test (True)
const isCloudy = false;
console.log("Test 9: Is it not cloudy? I predict True.");
console.log(!isCloudy); // True

// Test 10: Logical NOT Test (False)
const isFoggy = true;
console.log("Test 10: Is it not foggy? I predict False.");
console.log(!isFoggy); // False*/
//24
// Tests for equality and inequality with strings
const fruit1 = 'apple';
const fruit2 = 'banana';
// Test 11: String Equality (True)
console.log("Test 11: Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 == 'apple'); // True
// Test 12: String Inequality (False)
console.log("Test 12: Is fruit2 not equal to 'cherry'? I predict False.");
console.log(fruit2 != 'cherry'); // False
// Tests using the lower case function
const text = 'Hello, World!';
const lowercaseText = text.toLowerCase();
// Test 13: String Case Insensitive Equality (True)
console.log("Test 13: Is lowercaseText equal to 'hello, world!'? I predict True.");
console.log(lowercaseText === 'hello, world!'); // True
// Numerical tests
const num1 = 10;
const num2 = 5;
// Test 14: Numerical Greater Than (True)
console.log("Test 14: Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True
// Test 15: Numerical Less Than (False)
console.log("Test 15: Is num2 less than num1? I predict False.");
console.log(num2 < num1); // True
// Test 16: Numerical Greater Than or Equal To (True)
console.log("Test 16: Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2); // True
// Test 17: Numerical Less Than or Equal To (False)
console.log("Test 17: Is num2 less than or equal to num1? I predict False.");
console.log(num2 <= num1); // True
// Tests using "and" and "or" operators
const isMorning = true;
const isWeekend = false;
// Test 18: Logical AND (False)
console.log("Test 18: Is it morning AND the weekend? I predict False.");
console.log(isMorning && isWeekend); // False
// Test 19: Logical OR (True)
console.log("Test 19: Is it morning OR the weekend? I predict True.");
console.log(isMorning || isWeekend); // True
// Test whether an item is in an array
const fruits = ['apple', 'banana', 'cherry', 'orange'];
// Test 20: Item in Array (True)
console.log("Test 20: Is 'cherry' in the fruits array? I predict True.");
console.log(fruits.includes('cherry')); // True
// Test whether an item is not in an array
// Test 21: Item not in Array (False)
console.log("Test 21: Is 'grape' not in the fruits array? I predict False.");
console.log(!fruits.includes('grape')); // False
