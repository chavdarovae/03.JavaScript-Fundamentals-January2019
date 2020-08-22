function solve(input) {
    let arr = JSON.parse(input);
    let header=[];
    for (let key in arr[0]) {
        header.push(key);
    }

    let tableEl=document.createElement('table');
    let trEl = tableEl.insertRow(-1);

    for (let i = 0; i < header.length; i++) {
        let thEl = document.createElement("th");
        thEl.innerHTML=header[i];
        trEl.appendChild(thEl);
    }

    for (let i = 0; i < arr.length; i++) {
        trEl = tableEl.insertRow(-1);
        for (const key in arr[i]) {
            let tableCell=trEl.insertCell(-1);
            tableCell.innerHTML=arr[i][key];
        }        
    }
    console.log(JSON.stringify(table));    
}

solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');