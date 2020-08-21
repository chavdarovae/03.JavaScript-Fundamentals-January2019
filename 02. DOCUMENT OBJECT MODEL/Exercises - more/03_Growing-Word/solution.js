function solve() {
   document.querySelector('#exercise button').addEventListener('click', clickAction);
   let clickCounter = 0

   function clickAction() {
      clickCounter++;
      let fColor = '';
      let fSize = 2*clickCounter + 'px';
      
      if (clickCounter%3===0) {
         fColor = 'red';
      }else if (clickCounter%2===0) {
         fColor = 'green';
      }else{
         fColor = 'blue';
      }

      let paragraph=document.querySelector('#exercise p');
      paragraph.style.color=fColor;
      paragraph.style.fontSize=fSize;
   }
}