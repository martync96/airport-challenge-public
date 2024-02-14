import { assertTrue, assertEquals, assertFalse } from "../test/test-framework.js/test-framework.js";
import Airport from "../src/airport.js";
import Airplane from "../src/airplane.js";

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

// Test 1 - checkCapacity returns true if maxCapacity - currentCapacity >= 1
//arrange
const newAirport = new Airport(1, "Leeds", 3, 5);
testName = "checkCapacity returns true if maxCapacity - currentCapacity >= 1";

//act
actualOutput = newAirport.checkCapacity();

//assert
result = assertTrue(actualOutput);

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

// Test 2 - checkCapacity returns the difference between maxCapacity and currentCapacity
//arrange
const newAirport2 = new Airport(2, "Leeds", 5, 5)
testName = "checkCapacity returns false if maxCapacity - currentCapacity >= 1";

//act
actualOutput = newAirport2.checkCapacity();

//assert
result = assertFalse(actualOutput);

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

// Test 1 - canPlaneLand returns true if planeLocation and airportName don't match
//arrange
const newAirplane1 = new Airplane(1, "Glasgow")
testName = "canPlaneLand returns true if planeLocation and airportName don't match";
input = newAirport.canPlaneLand(newAirplane1.planeLocation);

// act
expectedOutput = input;

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

// Test 2 - canPlaneLand returns false if planeLocation and airportName match
//arrange
const newAirplane2 = new Airplane(1, "Leeds")
testName = "canPlaneLand returns false if planeLocation and airportName match";
input = newAirport.canPlaneLand(newAirplane2.planeLocation);

// act
expectedOutput = input;

// assert
result = assertFalse(expectedOutput);

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

/*

User Story 3: 

As an air traffic controller, I want to be able to instruct airplanes to land at an airport only if the airport 
has space and the airplane isn't currently at the airport 

*/

// Test One: checkCapacity returns true if maxCapacity - currentCapacity > 0

// arrange 
const newAirport3 = new Airport(1, "Leeds", 5, 8);
testName = "checkCapacity returns true if maxCapacity - currentCapacity > 0"; 

// act
input = newAirport3.checkCapacity();

// assert
result = assertTrue(input);

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

// Test Two: canPlaneLand returns true if planeLocation and airportName are not the same

// arrange 
const newAirplane3 = new Airplane(1, "Bradford");
testName = "canPlaneLand returns true if planeLocation and airportName are not the same"; 
input = newAirplane3.planeLocation

// act
expectedOutput = newAirport3.canPlaneLand(input);

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

// Test Three: Initiate landing returns true only if both canPlaneLand and checkCapacity returns true

// arrange 
testName = "initiateLanding returns true if planeLocation and airportName are not the same"; 
input = newAirplane3.planeLocation

// act
expectedOutput = newAirport3.initiateLanding(input);

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

// Test Four: landPlane changes planeLocation to airportName if initiateLanding returns true()

//arrange
testName = "landPlane changes planeLocation to airportName if initiateLanding returns true()";
input = newAirport3.canPlaneLand(newAirplane3.planeLocation);
expectedOutput = "Leeds";

//act
newAirplane3.landPlane(input, newAirplane3.airportName);
actualOutput = newAirport3.airportName;

//assert

result = assertEquals(actualOutput, expectedOutput);

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

/* 

User Story 4: As an air traffic controller, I want to be able to instruct planes to take off from an airport only 
when the airplane is at said airport, to ensure proper protocol is adhered too

*/

// Test One: canPlaneTakeOff returns true if planeLocation and airportName are the same

// Arrange
const newAirport4 = new Airport(1, "Manchester", 3, 5)
const newAirplane4 = new Airplane(1, "Manchester");
testName = "canPlaneTakeOff returns true if planeLocation and airportName are the same";
input;

// Act
actualOutput = newAirport4.canPlaneTakeOff(newAirplane4.planeLocation)

// Assert
result = assertTrue(actualOutput);

// Report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

// Clean Up
testName = undefined;
input = undefined;
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;

// Test Two - TakeOff() changes planeLocation to "In the air"

// Arrange
testName = "takeOff() changes planeLocation to `in the air`";
input = newAirport4.canPlaneTakeOff(newAirplane4.planeLocation);

// Act
newAirplane4.takeOff(input)
actualOutput = newAirplane4.planeLocation;
expectedOutput = "In the air";

// Assert 
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(testName);
console.log('');
console.log(`Test result: ${result}`);
console.log('============================');

// Clean Up
testName = undefined;
input = undefined;
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;

/*

User Story 5:

As an admin I want to be able too override the capacity of existing airports, so the application can reflect changes to airports  

*/

// Test 1: overrideCapacity() changes maxCapacity

//arrange
const newAirport5 = new Airport(1, "Liverpool", 0, 6)
testName = "overrideCapacity() changes maxCapacity";
input = 8
expectedOutput = 8;

//act
newAirport5.overrideCapacity(input)
actualOutput = newAirport5.maxCapacity;

//assert
result = assertEquals(actualOutput, expectedOutput);

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





