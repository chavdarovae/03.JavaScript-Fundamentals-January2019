function solve() {
  let input = document.getElementById('input').textContent;
  let outputElement = document.getElementById('output');

  let sentencePattern = /["']?[A-Z][^.?!]+((?![.?!]['"]?\s["']?[A-Z][^.?!]).)+[.?!'"]+/g;
  let sentences = input.match(sentencePattern);

  for (let i = 0; i < sentences.length - 2; i += 3) {
    let currParagraph = document.createElement('p');
    currParagraph.textContent = sentences[i] + ' ' + sentences[i + 1] + ' ' + sentences[i + 2];
    outputElement.appendChild(currParagraph)
  }

  if (sentences.length % 3 !== 0) {
    let remainingSentences = sentences.length % 3;
    let start = sentences.length - remainingSentences;
    let text = '';

    for (let i = start; i < sentences.length; i++) {
      text += sentences[i] + ' ';
    }
    let lastParagraph = document.createElement('p');
    lastParagraph.textContent = text;
    outputElement.appendChild(lastParagraph)
  }
}