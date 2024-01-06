// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// return first 2 drivers

const returnFirstTwoDrivers = function(driversNames) {
    return driversNames.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));

// return last 2 drivers

const returnLastTwoDrivers = function(driversNames) {
    return driversNames.slice(2,4);
}
console.log(returnLastTwoDrivers(drivers));

//selecting drivers
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

console.log(selectingDrivers[0](drivers)); // Invoke first function
console.log(selectingDrivers[1](drivers)); // Invoke last function

//createFareMultiplier

function createFareMultiplier (fare) {
    return function(value) {
        return fare * value;
    }
}
console.log(createFareMultiplier(4)(4));

//fare double

const fareDoubler = function(fare){
    let doubleFare = createFareMultiplier(2);
    return doubleFare(fare);
}
console.log(fareDoubler(10));

//triple double

const fareTripler = function(fare){
    let doubleFare = createFareMultiplier(3);
    return doubleFare(fare);
}
console.log(fareTripler(12));

// selecting different drivers
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
    
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));