export default class Airport{

    #id
    #airportName
    #currentCapacity
    #maxCapacity

    constructor(id, airportName, currentCapacity, maxCapacity)
    {
        this.#id = id;
        this.#airportName = airportName;
        this.#currentCapacity = currentCapacity;
        this.#maxCapacity = maxCapacity;
    }

    get id()
    {
        return this.#id;
    }

    get airportName()
    {
        return this.#airportName;
    }

    get currentCapacity()
    {
        return this.#currentCapacity;
    }

    get maxCapacity()
    {
        return this.#maxCapacity;
    }

    set currentCapacity(newCapacity)
    {
        if(this.#currentCapacity >= this.#maxCapacity)
        {
            console.log("Error: current capacity can not exceed max capacity")
        }else{
            this.#currentCapacity = newCapacity
        }
    }

    set maxCapacity(newCapacity)
    {
        return this.#maxCapacity = newCapacity;
    }

    overrideCapacity(newCapacity)
    {
        return this.#maxCapacity = newCapacity
    }

    checkCapacity()
    {
        return (this.#maxCapacity - this.#currentCapacity) >= 1 ? true : false;
    }

    canPlaneLand(airplaneLocation)
    {
        return this.#airportName != airplaneLocation;
    }

    canPlaneTakeOff(airplaneLocation)
    {
        return (this.#airportName === airplaneLocation)
    }

    initiateLanding(airplaneLocation)
    {
        if(this.canPlaneLand(airplaneLocation) && this.checkCapacity())
        {
            console.log("Airplane has clearance for landing");
            this.#currentCapacity += 1;
            return true;
        }else{
            console.log("Airplane cannot land");
            return false;
        }
    }

}