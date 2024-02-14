# User Case Stories
| Statement                                           | User Story                                                                                                                                     | Nouns              | Verbs    |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|----------|
| 1. an air traffic controller is able to instruct an | As an air traffic controller, I want to be able to instruct airplanes                                                                          | Airport, Airplane  | Land     |
| to land at an airport that is not full              | to land at an airport when it is not full, so airplanes can land safely                                                                        |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 2. an air traffic controller is able to instruct an | As an air traffic controller, I only want to be able to instruct an airplane to land at an airport                                             | Airport, Airplane  | Land     |
| to land at an airport that it is not currently at   | if it is currently not at that airport, So the airport can operate safely and without confusion                                                |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 3. an air traffic controller is able to instruct an | As an air traffic controller, I want to be able to instruct airplanes to                                                                       | Airport, Airplane  | Land     |
| to land at an airport that is not full and it is    | land at an airport only if the airport has space for the plane and the airplane isn't currently at that airport                                |                    |          |
| currently at                                        | so I can ensure                                                                                                                                |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 4. an air traffic controller is able to instruct a  | as an air traffic controller, I want to be able to instruct airplanes to take off from an airport only when the airplane is at said airport    | Airport, Airplane  | Take off |
| plane to take off from an airport as long as it is  | to ensure proper protocol is adhered too.                                                                                                      |                    |          |
| currently at the airport                            |                                                                                                                                                |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 5. An admin can create new airports with different  | As an admin I want to be able to create new airports with different capacities, so the application is scalable and deployable to new locations | Airports, Capacity | Create   |
| capacities                                          |                                                                                                                                                |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 6. An admin can override an existing airports       | As an admin I want to be able too override the capacity of existing airports, so the application can reflect changes to airports               | Airports, Capacity | Override |
| capacity                                            |                                                                                                                                                |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 7. A airplane is not able to take off if the        | As an air traffic controller, I want to ensure airplanes cannot take off when the weather is stormy                                            | Airplane, Weather  | Take Off |
| weather is stormy                                   | so i can ensure the health and safety of everyone on the plane                                                                                 |                    |          |
|                                                     |                                                                                                                                                |                    |          |
| 8. A airplane is not able to land if the weather    | An a air traffic controller, I want to be able to instruct airplanes to land when the weather isn't stormy                                     | Airplane, Weather  | Land     |
| is stormy                                           | so I can ensure the health and safety of everyone on the plane                                                                                 |                    |          |

| Objects  | Properties            | Messages                       | Output  |
|----------|-----------------------|--------------------------------|---------|
| Airplane | planeID @Int          | getPlaneID()                   | @Int    |
|          | planeLocation @String | getPlaneLocation()             | @String |
|          |                       | setPlaneLocation()             | void    |
|          |                       | land(@status, @weatherType)    | void    |
|          |                       | takeOff(@status @weatherType)  | void    |
|          |                       |                                |         |
| Airport  | airportID @Int        | getAirportID()                 | @Int    |
|          | airportName @String   | getAirportName()               | @String |
|          | currentCapacity @Int  | getCurrentCapacity()           | @Int    |
|          | maxCapacity @Int      | overrideCapacity(@Int)         | void    |
|          |                       | setCapacity(Int)               | void    |
|          |                       | getMaxCapacity()               | void    |
|          |                       | checkCapacity()                | void    |
|          |                       | canPlaneLand(planeLocation)    |         |
|          |                       | canPlaneTakeOff(planeLocation) |         |
|          |                       | initiateLanding(planeLocation) |         |
|          |                       |                                |         |
| Weather  | weatherID @Int        | getWeatherID                   | @Int    |
|          | weatherType @String   | getWeatherType                 | @String |
|          |                       |                                |         |