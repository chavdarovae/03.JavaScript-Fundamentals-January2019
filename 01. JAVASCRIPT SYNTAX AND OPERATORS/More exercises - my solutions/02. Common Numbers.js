function solve(firstArr, secondArr, thirdArr) {
     let shortestArr=[];
     let arrA=[];
     let arrB=[];
     let commonEl=[];

     if(firstArr.length<=secondArr.length && firstArr.length<=thirdArr.length){
          shortestArr=firstArr;
          arrA=secondArr;
          arrB=thirdArr;
     }else if(secondArr.length<=firstArr.length && secondArr.length<=thirdArr.length){
          shortestArr=secondArr;
          arrA=firstArr;
          arrB=thirdArr;
     }else if(thirdArr.length<=firstArr.length && thirdArr.length<=secondArr.length){
          shortestArr=thirdArr;
          arrA=firstArr;
          arrB=secondArr;
     }

     for (const el of shortestArr) {
          if(arrA.includes(el) && arrB.includes(el)){
               commonEl.push(el);
          }
     }  
     
     let sortedArr=commonEl.sort((a,b)=>a>b)
     let average=(sortedArr.reduce((a,b)=>a+b)/sortedArr.length);
     let median=getMedian(sortedArr);
     console.log(`The common elements are ${sortedArr.join(', ')}.`);
     console.log(`Average: ${average}.`);
     console.log(`Median: ${median}.`);

     function getMedian(arr){
          let med=0
          if(arr.length%2===0){
               med=0.5*(arr[arr.length/2-1]+arr[arr.length/2]);
          }else{
               med=arr[Math.floor(arr.length/2)];
          }
          return med;
     }
}

solve(
     [1, 2, 3, 4, 5],
     [3, 2, 1, 5, 8],
     [2, 5, 3, 1, 16]     
    );