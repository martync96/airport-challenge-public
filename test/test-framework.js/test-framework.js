//basic functions for testing framework to assert values

export const assertEquals = (actualValue, expectedValue) => actualValue === expectedValue; //asserts that the two values are equal 

export const assertTrue = actualValue => actualValue === true; //asserts value is true

export const assertFalse = actualValue => actualValue === false; // asserts value is false

//Test framework code adapted from Ed Wright 