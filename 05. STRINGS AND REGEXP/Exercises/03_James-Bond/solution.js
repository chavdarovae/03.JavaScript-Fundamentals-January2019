function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let keyword = input.shift();
  let message = input.join('</p><p>');
  let msgPattern = new RegExp(`((?<= )|(?<=^)|(?<=>))${keyword} +([!%$#A-Z]{8,}([ \\.,<$]|(?=$)))`, 'gmi');
  let smallLettersPattern = /[a-z]/g;

  let match;
  while ((match = msgPattern.exec(message)) !== null) {
    let msgToDecode = match[2];
    if (smallLettersPattern.exec(msgToDecode) === null) {
      let decodedMsg = msgToDecode.toLowerCase()
        .split('')
        .map(x => {
          switch (x) {
            case '!': return '1';
            case '%': return '2';
            case '#': return '3';
            case '$': return '4';
            default: return x;
          }
        })
        .join('');
      message = message.replace(msgToDecode, decodedMsg)
    }
  }

  let resultEL = document.getElementById('result');
  resultEL.innerHTML=`<p>${message}</p>`;
}