function solve(rows, cols) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr.push([]);        
    }

    for (let i = 1; i <= rows * cols; i++) {
        let correction=Math.floor(i/(rows * cols-4));
        i%=rows * cols-4;
        if(i<=cols) arr[correction][i]=i;
        else if(cols<i<=cols+rows-1) arr[i%rows][cols-correction]=i;
        else if(cols+rows-1<i<=cols+rows-1+cols-1) arr[rows-correction][i%rows+1]=i;
        else if(cols+rows-1+cols-1<i<=cols+rows-1+cols-1+rows-2) arr[rows-correction-1][i%rows+1]=i;
    }
    console.log(arr.join(', '));
}


solve(3, 3);