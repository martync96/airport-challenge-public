import { assertEquals, assertTrue } from "./test-framework.js/test-framework.js";
import Airport from "../src/airport.js";

/*

User Story 1:

As an air traffic controller, 
I want to be able to instruct airplanes to land at an airport when it is not full, 
so airplanes can land safely

*/

// set up tests

let testName;
let input;
let expectedOutput, actualOutput, result;

// Test One - getCurrentCapacity returns an Int
// arrange 
const newAirport = new Airport(1, 3, 5)

testName = "getCurrentCapacity returns an Int"; 
input = newAirport.currentCapacity;

// act
expectedOutput = Number.isInteger(input);

// assert
result = assertTrue(expectedOutput);

// report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

//clean up 
testName = undefined;
input = undefined;
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;

// Test Two - getMaxCapacity returns an Int
//arrange

testName = "getMaxCapacity returns an Int"
input = newAirport.maxCapacity;

// act
expectedOutput = Number.isInteger(input);

// assert
result = assertTrue(expectedOutput);

// report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

//clean up 
testName = undefined;
input = undefined;
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;



// Test 3 - checkCapacity returns the difference between maxCapacity and currentCapacity
//arrange

testName = "checkCapacity returns the difference between maxCapacity and currentCapacity";
input = newAirport;
expectedOutput = 2;

//act
actualOutput = newAirport.checkCapacity();

//assert
result = assertEquals(expectedOutput, actualOutput);

// report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

//clean up 
testName = undefined;
input = undefined;
actualOutput = undefined;
expectedOutput = undefined;
result = undefined;

/* 

User Story 2: 

As an air traffic controller, I only want to be able to instruct an airplane to land at an 
airport if it is currently not at that airport, so the airport can operate safely and without confusion

*/

// Test One: getPlaneLocation returns the planeLocation and not undefined

// arrange 

testName = "getPlaneLocation returns the planeLocation and not undefined"; 
input = "Scarborough";

// act
expectedOutput = "Leeds"

// assert
result = assertEquals(input, expectedOutput);

// report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

//clean up 
testName = undefined;
input = undefined;
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;


// Test Two getAirportName returns airportName and not undefined 

// Test Three: initiateLanding returns true if planeLocation and airportName match