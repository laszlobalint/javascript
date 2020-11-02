// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const objectA = createObject(stringA);
//   const objectB = createObject(stringB);

//   if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;

//   for (const [key, value] of Object.entries(objectA)) {
//     if (!objectB[key] || value !== objectB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function createObject(string) {
//   let object = {};
//   string
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .map((char) => (object[char] ? object[char]++ : (object[char] = 1)));
//   return object;
// }

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
