export default class Airplane
{
    #id
    #planeLocation

    constructor(id, planeLocation)
    {
        this.#id = id;
        this.#planeLocation = planeLocation;
    }

    get id()
    {
        return this.#id;
    }

    get planeLocation()
    {
        return this.#planeLocation
    }

    set planeLocation(newPlaneLocation)
    {
        this.#planeLocation = newPlaneLocation;
    }

    landPlane(safeToLand, airportName)
    {
        if(safeToLand)
        {
            this.#planeLocation = airportName;
        } 
    }

    takeOff(safeToTakeOff)
    {
        if(safeToTakeOff)
        {
            this.#planeLocation = "In the air";
        }
    }
}