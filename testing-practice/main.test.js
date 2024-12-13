import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

describe("capitalize", () => {
  test("capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("multiple words", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});

describe("reverseString", () => {
  test("reverse a given string", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });

  test("reverse an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverse a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });
});

describe("calculator sum", () => {
  test("sum 2 numbers", () => {
    expect(calculator.add(1, 3)).toBe(4);
  });
});

describe("calculator subtract", () => {
  test("subtract 2 numbers", () => {
    expect(calculator.subtract(1, 3)).toBe(-2);
  });
});

describe("calculator multiply", () => {
  test("multiply 2 numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});

describe("calculator divide", () => {
  test("divide by zero", () => {
    expect(() => calculator.divide(2, 0)).toThrow();
  });

  test("divide 2 numbers", () => {
    expect(calculator.divide(2, 5)).toBe(0.4);
  });
});

describe("analyze a given array", () => {
  test("array is empty", () => {
    expect(() => analyzeArray([])).toThrow();
  });

  test("return the average, min, max, and length of the array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("array has negative numbers", () => {
    expect(analyzeArray([-5, 0, 5])).toEqual({
      average: 0,
      min: -5,
      max: 5,
      length: 3,
    });
  });
});

describe("caesarCipher", () => {
  test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
