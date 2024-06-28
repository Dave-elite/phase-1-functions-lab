// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){

    
let distance 

    if(pickupLocation < 42){

        console.log(distance = 42 - pickupLocation)
    }
    else{
        console.log(distance = pickupLocation - 42)
    }
return distance;
}
function distanceFromHqInFeet(pickupLocation){

    const blocks = distanceFromHqInBlocks(pickupLocation)

    const feetPerBlock = 264;

    const distanceInFeet = blocks * feetPerBlock

    return distanceInFeet

}

function distanceTravelledInFeet(start, destination){

    const blocksTravelled = Math.abs(destination - start);
const feetPerBlock = 264

const distanceInFeet = blocksTravelled * feetPerBlock


 return distanceInFeet

}



function calculatesFarePrice(start, destination){

    const distanceInFeet = distanceTravelledInFeet(start, destination)

    let price 
    if (distanceInFeet > 0 && distanceInFeet < 400){
        price= 0
    }else if(distanceInFeet >= 400 && distanceInFeet < 2000){
        price = Math.abs(0.02 * (distanceInFeet - 400))

    }else if(distanceInFeet >= 2000 && distanceInFeet < 2500){
        price = 25

    }    else{
        price = 'cannot travel that far'
    }
    return price;
}
