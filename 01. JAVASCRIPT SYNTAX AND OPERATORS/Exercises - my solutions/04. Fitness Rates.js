function solve(day, service, time) {
    let servicePrice = 0;

    if (day === 'Saturday' || day === 'Sunday') {
        switch (service) {
            case 'Fitness': servicePrice = 8; break;
            case 'Sauna': servicePrice = 7; break;
            case 'Instructor': servicePrice = 15; break;
        }

    } else {
        switch (service) {
            case 'Fitness': servicePrice = 5; break;
            case 'Sauna': servicePrice = 4; break;
            case 'Instructor': servicePrice = 10; break;
        }
        if (time >= 15) {
            servicePrice += 2.5;
        }
    }
    console.log(servicePrice);
}

solve('Monday', 'Sauna', 15.30);