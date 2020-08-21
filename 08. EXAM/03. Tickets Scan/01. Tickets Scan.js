function solve(string, command) {
    let print = '';

    let nameRegexp = /(?<= )[A-Z]([A-Za-z]+)?-([A-Z]([A-Za-z]+)?.-)?[A-Z]([A-Za-z]+)?(?= )/gm;
    let name = (nameRegexp.exec(string)).shift().split('-').join(' ');
    let airportRegexp = /(?<= )[A-Z]{3}\/[A-Z]{3}?(?= )/gm;
    let airport = (airportRegexp.exec(string)).shift();
    let [fromAirport, toAirport] = airport.split('/');
    let flightNumberRegexp = /(?<= )[A-Z]{1,3}[0-9]{1,5}?(?= )/gm;
    let flightNumber = (flightNumberRegexp.exec(string)).shift();
    let companyRegexp = /(?<=- )[A-Z]([A-Za-z]+)?\*[A-Z]([A-Za-z]+)?(?= )/gm;
    let company = (companyRegexp.exec(string)).shift().split('*').join(' ');

    switch (command) {
        case 'name':
            print = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case 'flight':
            print = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
            break;
        case 'company':
            print = `Have a nice flight with ${company}.`;
            break;
        case 'all':
            print = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
            break;
    };
    console.log(print);
}

solve(
    'ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
    'all'
);