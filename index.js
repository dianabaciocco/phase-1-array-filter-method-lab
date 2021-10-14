// Code your solution here
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.


function findMatching(drivers, name) {
    return drivers.filter( driver =>
      driver.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch (driverArray, driverName){
    return driverArray.filter(element =>
    element.slice(0,1) === driverName.slice(0,1))
    }

function matchName(driversName, name) {
    return driversName.filter(driver => {
        console.log(driver)
        return (driver.name === name)})
   
} 
let matchNameVar = [{
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }]
console.log(matchName(matchNameVar, "Bobby"))