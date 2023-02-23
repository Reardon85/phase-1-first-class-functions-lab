// Code your solution in this file!

const returnFirstTwoDrivers = function(dList) {return [dList[0], dList[1]] };

const returnLastTwoDrivers = function(dList) { const x = dList.length;
    const newArray =[ dList[x-2], dList[x-1]];
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(number){
    return function(fare) {
        return number*fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(dList, dFunction){

    return dFunction(dList);
}