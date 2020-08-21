function solve(input) {
    let townArr=[];

    for (let line of input) {
        line=line.split(' -> ');
        let [amount,price]=line[2].split(' : ').map(Number);
        let income=amount*price;
        let found = townArr.find(o=>o.town===line[0]);
        if(found===undefined){
            let productObj = { productName: line[1], productIncome: income};
            let productArr = [productObj];
            let townObj = { town: line[0], products: productArr };             
            townArr.push(townObj)
        }else{
            let productObj = { productName: line[1], productIncome: income};
            found.products.push(productObj);            
        }       
    }
   
    for (let obj of townArr) {
        console.log(`Town - ${obj.town}`);
        for (let intObj of obj.products) {
            console.log(`$$$${intObj.productName} : ${intObj.productIncome}`);
        }
    }
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
])