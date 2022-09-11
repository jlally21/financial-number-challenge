const {
  endsWith,
  isStringOnlyContainsDigitsOrDecimal,
  getStringWithLastCharacterRemoved,
  getFinancialNumberRepresentationFromString,
  calculateNumberValueFromFinancialNumberRepresentation,
} = require("./helpers");

test("endsWith method", () => {
  expect(endsWith("1000a", ["a", "b"])).toBe(true);
  expect(endsWith("1000c", ["a", "b"])).toBe(false);
  expect(endsWith("1000c", ["a", "b", "c"])).toBe(true);
  expect(endsWith("1000", ["a", "b"])).toBe(false);
  expect(endsWith("1000", [])).toBe(false);
  expect(endsWith("", ["a", "b"])).toBe(false);
});

test("isStringOnlyContainsDigitsOrDecimal method", () => {
  expect(isStringOnlyContainsDigitsOrDecimal("100a")).toBe(false);
  expect(isStringOnlyContainsDigitsOrDecimal("100.2")).toBe(true);
  expect(isStringOnlyContainsDigitsOrDecimal(".123")).toBe(true);
  expect(isStringOnlyContainsDigitsOrDecimal("4434234234.123")).toBe(true);
  expect(isStringOnlyContainsDigitsOrDecimal("0")).toBe(true);
  expect(isStringOnlyContainsDigitsOrDecimal("0.0")).toBe(true);
  expect(isStringOnlyContainsDigitsOrDecimal(null)).toBe(false);
  expect(isStringOnlyContainsDigitsOrDecimal("abcd.efgh")).toBe(false);
});

test("getStringWithLastCharacterRemoved method", () => {
  expect(getStringWithLastCharacterRemoved("abcd")).toBe("abc");
  expect(getStringWithLastCharacterRemoved("ab")).toBe("a");
  expect(getStringWithLastCharacterRemoved("a")).toBe("");
  expect(getStringWithLastCharacterRemoved("")).toBe("");
});

test("getFinancialNumberRepresentationFromString method", () => {
  expect(getFinancialNumberRepresentationFromString("100h")).toEqual({
    abbreviation: "h",
    number: 100,
  });
  expect(getFinancialNumberRepresentationFromString(".5b")).toEqual({
    abbreviation: "b",
    number: 0.5,
  });
  expect(getFinancialNumberRepresentationFromString("10.5m")).toEqual({
    abbreviation: "m",
    number: 10.5,
  });
  expect(() => {
    getFinancialNumberRepresentationFromString("10.5c");
  }).toThrow(Error);
  expect(() => {
    getFinancialNumberRepresentationFromString("10.5");
  }).toThrow(Error);
  expect(() => {
    getFinancialNumberRepresentationFromString("abcd");
  }).toThrow(Error);
});

test("calculateNumberValueFromFinancialNumberRepresentation method", () => {
  expect(
    calculateNumberValueFromFinancialNumberRepresentation({
      abbreviation: "m",
      number: 5,
      valid: true,
    })
  ).toEqual(5000000);
  expect(
    calculateNumberValueFromFinancialNumberRepresentation({
      abbreviation: "m",
      number: 5,
      valid: false,
    })
  ).toEqual(0);
  expect(
    calculateNumberValueFromFinancialNumberRepresentation({
      abbreviation: "h",
      number: 0.5,
      valid: true,
    })
  ).toEqual(50);
  expect(
    calculateNumberValueFromFinancialNumberRepresentation({
      abbreviation: "c",
      number: 0.5,
      valid: true,
    })
  ).toEqual(0);
});
