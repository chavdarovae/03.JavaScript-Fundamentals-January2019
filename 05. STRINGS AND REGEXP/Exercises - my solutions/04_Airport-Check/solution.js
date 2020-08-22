function solve() {
    let input = document.getElementById('str').value;
    let [info, printType] = input.split(', ');

    let namePattern = / ([A-Z][A-Za-z]*-([A-Z][A-Za-z]*.-)?[A-Z][A-Za-z]*) /gm;   
    let name = namePattern.exec(info)[1].replace('-', ' ').replace('-', ' ');        
    let airportPattern = / (([A-Z]{3})\/([A-Z]{3})) /gm;
    let airport = airportPattern.exec(info);
    let flightPattern = / ([A-Z]{1,3}[0-9]{1,5}) /gm;
    let flightNumber = flightPattern.exec(info)[1];
    let companyPattern = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)/gm;
    let companyName = companyPattern.exec(info)[1].replace('*', ' ');

    let print = '';
    switch (printType) {
        case 'name': print = `Mr/Ms, ${name}, have a nice flight!`; break;
        case 'flight': print = `Your flight number ${flightNumber} is from ${airport[2]} to ${airport[3]}.`; break;
        case 'company': print = `Have a nice flight with ${companyName}.`; break;
        case 'all': print = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airport[2]} to ${airport[3]}. Have a nice flight with ${companyName}.`; break;
    }

    let resultSp = document.getElementById('result');
    resultSp.innerHTML = print;
}