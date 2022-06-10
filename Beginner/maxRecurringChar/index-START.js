/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let max = 0;
  let maxChar = "";
  text.split("").forEach(function (char) {
    if (text.split(char).length > max) {
      max = text.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
}
module.exports = maxRecurringChar;
