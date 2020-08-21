function solve() {
  Array.from(document.getElementsByTagName('a')).forEach(a=>a.addEventListener('click',registerSiteVisit));

  function registerSiteVisit(e){
    let currLink=e.target;
    let currParent=currLink.parentNode;
    let currCountLabel=currParent.getElementsByTagName('span')[0].textContent;
    let labelContent=currCountLabel.split(' ');

    let visitCount=+labelContent[1];
    visitCount++;
    labelContent[1]=visitCount;
    let updatedLabel=labelContent.join(' ');
    currParent.getElementsByTagName('span')[0].textContent=updatedLabel;    
  }
}