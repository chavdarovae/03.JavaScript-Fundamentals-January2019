function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn)=>{
        btn.addEventListener('click',send)
    })

    function send(e) {
        let selectedButton=e.target;
        let sender;
        let textToSend;

        if(selectedButton.name==="myBtn"){
            sender="Me";
            textToSend= document.getElementById('myChatBox').value;
        }else if(selectedButton.name==="peshoBtn"){
            sender="Pesho";
            textToSend= document.getElementById('peshoChatBox').value;
        }

        let spanElement=document.createElement('span');
        spanElement.textContent=sender;
        
        let pElement=document.createElement('p');
        pElement.textContent=textToSend;
        
        let divElement=document.createElement('div');
        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);

        sender==="Me"?divElement.style.textAlign='left':divElement.style.textAlign='right';

        document.getElementById('chatChronology').appendChild(divElement);

        document.getElementById('myChatBox').value='';
        document.getElementById('peshoChatBox').value='';
    }
}