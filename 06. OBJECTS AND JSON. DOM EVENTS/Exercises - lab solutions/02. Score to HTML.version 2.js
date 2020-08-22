function solve(input) {
    let arr = JSON.parse(input);
    let table = arr.map(x => {
        let line = '';
        for (let key in x) {
            line += `<td>${x[key]}</td>`;
            
        }
        line=`\t<tr>${line}</tr>`;
        return line;
    });

    let header='';
    for (let key in arr[0]) {
        header+=`<th>${key}</th>`;
    }
    header=`\t<tr>${header}</tr>`;
    table.unshift(header);
    table.unshift('<table>');
    table.push('</table>');
    console.log(table.join('\n'));
}