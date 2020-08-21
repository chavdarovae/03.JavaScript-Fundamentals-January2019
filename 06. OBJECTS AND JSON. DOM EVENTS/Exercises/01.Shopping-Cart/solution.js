function solve() {
    let productButtons = Array.from(document.querySelectorAll('.product button'));
    productButtons.forEach(b => b.addEventListener('click', listProduct))
    let buyButton=document.querySelector('#exercise > button');
    buyButton.addEventListener('click',printTotalSum);
    let textAreaEl=document.querySelector('#exercise textarea');   

    let totalPrice=0;
    let productList=new Set();
    function listProduct(e) {
        let currButton = e.target;
        let currParent = currButton.parentNode;
        let currProduct = Array.from(currParent.querySelectorAll('p'))[0].textContent;
        let currPrice = Array.from(currParent.querySelectorAll('p'))[1].textContent.split(' ').map(Number)[1];
        
        textAreaEl.value += `Added ${currProduct} for ${currPrice} to the cart\n`;
        totalPrice+=currPrice;
        productList.add(currProduct);           
    }

    function printTotalSum() {
        textAreaEl.value += `You bought ${[...productList.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;
    }
}