function solve(arr) {
    let [flighType, flightDestination, fligthTime, flightNumber, gateNumber ]=arr;
    console.log(`${flighType}: Destination - ${flightDestination}, Flight - ${flightNumber}, Time - ${fligthTime}, Gate - ${gateNumber}`);
}

solve(['Departures', 'London', '22:45', 'BR117', '42']);