function distanceFromHqInBlocks (pickUp) {
    let blockDistance = Math.abs(pickUp - 42);
    return blockDistance;
}

function distanceFromHqInFeet (pickUp) {
    distanceFromHqInBlocks (pickUp);
    return distanceFromHqInBlocks(pickUp) * 264;
}

function distanceTravelledInFeet (start, destination) {
    let distanceTravelledInBlock = Math.abs(destination - start);
    return distanceTravelledInBlock * 264;
}

function calculatesFarePrice (start, destination) {
    distanceTravelledInFeet (start, destination);
    let totalDistance = distanceTravelledInFeet (start, destination);
    let farePrice;
    if (totalDistance <= 400 ) {
        farePrice = 0
    }
    else if (totalDistance > 400 && totalDistance < 2000) {
        farePrice = 2.56;
    }
    else if (totalDistance > 2000 && totalDistance < 2500) {
        farePrice = 25;
    }
    else if (totalDistance > 2500) {
        farePrice = 'cannot travel that far';
    }

return farePrice;
}