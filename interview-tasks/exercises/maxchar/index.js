// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let object = {};
  let highest = 0;
  let result = "";
  str.split("").map((char) => (object[char] ? object[char]++ : (object[char] = 1)));
  for (const [key, value] of Object.entries(object)) {
    if (highest < value) {
      highest = value;
      result = key;
    }
  }
  return result;
}

module.exports = maxChar;
