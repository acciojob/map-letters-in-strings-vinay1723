//your JS code here. If required.
function mapLetters(word) {
  let result = {};

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!result[char]) {
      result[char] = [];
    }

    result[char].push(i);
  }

  return result;
}

window.exports = mapLetters;