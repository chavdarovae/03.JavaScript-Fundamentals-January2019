function solve() {
  let input = document.getElementById('text').value;
  let keyword = document.getElementById('str').value;
  let resultEl = document.getElementById('result');

  let coordPattern = /(east|north).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
  let messagePattern = new RegExp(`(?<=${keyword}).+?(?=${keyword})`, 'gm')

  let message = messagePattern.exec(input);
  let north = '';
  let east = '';
  let coord = '';
  while ((coord = coordPattern.exec(input)) !== null) {
    coord[1].toLowerCase() === 'north' ? north = coord[2] + '.' + coord[3] : east = coord[2] + '.' + coord[3];
  }
  resultEl.innerHTML = `<p>${north} N</p><p>${east} E</p><p>Message: ${message}</p>`
}