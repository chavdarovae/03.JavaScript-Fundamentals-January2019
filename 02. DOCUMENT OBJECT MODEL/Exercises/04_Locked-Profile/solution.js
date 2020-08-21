function solve() {
   Array.from(document.getElementsByTagName('button')).forEach((btn) => btn.addEventListener('click', showMoreOrHideIt));

   function showMoreOrHideIt(e) {
      let button = e.target;
      let buttons = document.getElementsByTagName('button');

      let userID;
      let userLocked;
      let hiddenInfo;

      if (button === buttons[0]) {
         userID=document.querySelector(`.profile input[name="user1Locked"]`).parentNode;
         hiddenInfo=document.getElementById('user1HiddenFields');
      } else if (button === buttons[1]) {
         userID=document.querySelector(`.profile input[name="user2Locked"]`).parentNode;
         hiddenInfo=document.getElementById('user2HiddenFields');
      } if (button === buttons[2]) {
         userID=document.querySelector(`.profile input[name="user3Locked"]`).parentNode;
         hiddenInfo=document.getElementById('user3HiddenFields');
      }

      userLocked=userID.children[2].checked;
      if(!userLocked && button.textContent==="Show more"){
         hiddenInfo.style.display = 'block';
         button.textContent="Hide it";
      } else if(!userLocked && button.textContent==="Hide it"){
         hiddenInfo.style.display = 'none';
         button.textContent="Show more";
      }         
   }
} 