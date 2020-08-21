function solve() {
    let numberPattern=/[-]*[0-9]+[.]*[0-9]*/g;
    let fMat=document.getElementById('mat1').value.split('], [');
    let sMat=document.getElementById('mat2').value.split('], [');
    
    let firstMat=[];
    for(let el of fMat){
        el=el.match(numberPattern);
        firstMat.push(el);
    }

   
    let secondMat=[];
    for(let el of sMat){
        el=el.match(numberPattern);
        secondMat.push(el);
    } 

    let resultDivEl=document.getElementById('result');
    let resultContent='';

    let transponsedMat = [];
    for (let i = 0; i < secondMat[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < secondMat.length; j++) {
            newRow.push(secondMat[j][i]);
        }
        transponsedMat.push(newRow);
    }

    let resultMat = [];
    for (let i = 0; i < firstMat.length; i++) {
        let newRow = [];
        for (let j = 0; j < transponsedMat[0].length; j++) {
            let newMember = 0;
            for (let k = 0; k < firstMat[0].length; k++) {
                newMember += Number(firstMat[i][k]) * Number(transponsedMat[k][j]);
            }
            newRow.push(newMember);
        }
        resultMat.push(newRow);
        resultContent+=`<p>${resultMat[i].join(', ')}</p>`;
    }
    resultDivEl.innerHTML=resultContent;
}