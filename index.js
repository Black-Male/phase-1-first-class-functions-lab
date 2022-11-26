// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = () => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer){
    return function(num){
        return integer*num
    }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,changingdriver) => {
    if (changingdriver === returnFirstTwoDrivers){
        return returnFirstTwoDrivers()
    } else if (changingdriver === returnLastTwoDrivers){
        return returnLastTwoDrivers()
    }

}