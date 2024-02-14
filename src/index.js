import Airport from "./airport.js";
import Airplane from "./airplane.js";

const manchesterAirport = new Airport(1, "Manchester", 9, 10);
const airplane1 = new Airplane(1, "In the air");
const airplane2 = new Airplane(2, "In the air");

const checkPlaneLocation = (planeLocation, airport, airplane) => 
{
    if(planeLocation){
        console.log("Airplane location cleared, checking if necessary space")
        console.log('============================');
        checkAirportCapacity(airport, airplane)
    }else{
        console.log("Airplane is currently at airport")
        console.log('============================');
    }
} //checks if the plane isn't at the airport, if true passes to function to check there is capacity at airport

const checkAirportCapacity = (airport, airplane) => {
    if(airport.initiateLanding(airplane.planeLocation)){
        console.log(`Airport capacity is now ${airport.currentCapacity}`)
        console.log('============================');
        landPlane(true, airport.airportName, airplane);
    }else{
        console.log("Apologies, we do not have the capacity to allow you to land")
        console.log('============================');
    }
} //if capacity at airport, initiates landing sequence for plane 

const landPlane = (safeToLand, airportName, airplane) => {
    airplane.landPlane(safeToLand, airportName);
} //changes plane location to same as the airport

const checkPlaneTakeOff = (planeLocation, airplane) => {
    if(planeLocation){
        planeTakeOff(planeLocation, airplane);
    }   
} //checks if plane is at the airport so it can take off

const planeTakeOff = (planeLocation, airplane) => {
    airplane1.takeOff(planeLocation)
    console.log("Plane now taking off");
} //initiates take off sequence


let planeLocation = manchesterAirport.canPlaneLand(airplane1.planeLocation);

console.log('Demonstrating a plane can land');
console.log('============================');
console.log(`The current location of airplane1 is ${airplane1.planeLocation}`)

checkPlaneLocation(planeLocation, manchesterAirport, airplane1);
console.log(`The current location of airplane1 is now ${airplane1.planeLocation}`);
console.log('============================');

console.log(`Demonstrating a plane can't land if there isn't the capacity`);
console.log('============================');
console.log(`The current location of airplane2 is ${airplane2.planeLocation}`)

planeLocation = manchesterAirport.canPlaneLand(airplane2.planeLocation);
checkPlaneLocation(planeLocation, manchesterAirport, airplane2);

console.log(`Demonstrating a plane can take off if it is at that airport`);
console.log('============================');
console.log(`The current location of airplane1 is ${airplane1.planeLocation}`);

planeLocation = manchesterAirport.canPlaneTakeOff(airplane1.planeLocation);
checkPlaneTakeOff(planeLocation, manchesterAirport, airplane1);
console.log(`The current location of airplane1 is ${airplane1.planeLocation}`);
console.log('============================');

console.log(`Demonstrating an air traffic controller can override capacity`);
console.log('============================');
console.log(`the current capacity is ${manchesterAirport.maxCapacity}`);
manchesterAirport.overrideCapacity(22);
console.log(`the current capacity is ${manchesterAirport.maxCapacity}`);






