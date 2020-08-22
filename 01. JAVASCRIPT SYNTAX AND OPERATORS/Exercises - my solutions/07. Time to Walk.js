function solve(numOfSteps, lengthOfFootprint, speedInKmPerHour) {
    let distance = numOfSteps * lengthOfFootprint;
    let numberOfBreaks = Math.floor(distance / 500);
    let breakDuration = 1;
    let speedInMetersPerMinutes = speedInKmPerHour * 1000 / 60;
    let timeInMinutes = distance / speedInMetersPerMinutes + numberOfBreaks * breakDuration;
    let timeInSeconds = timeInMinutes * 60;
    let hours = 0;
    let minutes = 0;
    let sdeconds = 0;

    hours = Math.floor(timeInSeconds / 3600);
    minutes = Math.floor(timeInSeconds % 3600 / 60);
    sdeconds = Math.round(timeInSeconds % 3600 % 60);

    function pad(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    }
    

    console.log(`${pad(hours,2)}:${pad(minutes,2)}:${pad(sdeconds,2)}`);
}

solve(4000, 0.60, 5);