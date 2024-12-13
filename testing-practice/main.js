const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => {
    if (num2 === 0) throw new Error("Cannot divide by 0");
    return num1 / num2;
  },
};

const analyzeArray = (arr) => {
  if (arr.length === 0) throw new Error("Array is empty");
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

const caesarCipher = (string, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedChars = [];

  for (const char of string) {
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      shiftedChars.push(char);
    } else {
      const newIndex = (index + shift) % 26;
      if (char === char.toUpperCase()) {
        shiftedChars.push(alphabet[newIndex].toUpperCase());
      } else {
        shiftedChars.push(alphabet[newIndex]);
      }
    }
  }
  return shiftedChars.join("");
};

export { capitalize, reverseString, calculator, analyzeArray, caesarCipher };
