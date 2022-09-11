const { validateFinancialNumberString } = require("./validations");

test("validateFinancialNumberString method", () => {
  expect(validateFinancialNumberString("1000a")).toEqual({
    valid: false,
    errorMessage:
      "Input must end with valid financial number abbreviation (h,k,m,b)",
  });
  expect(validateFinancialNumberString("1000")).toEqual({
    valid: false,
    errorMessage:
      "Input must end with valid financial number abbreviation (h,k,m,b)",
  });
  expect(validateFinancialNumberString(".5b")).toEqual({
    valid: true,
    errorMessage: null,
  });
  expect(validateFinancialNumberString("5b")).toEqual({
    valid: true,
    errorMessage: null,
  });
  expect(validateFinancialNumberString("a5b")).toEqual({
    valid: false,
    errorMessage:
      "Input must contain numbers/decimal place excluding the last character abbreviation (h,k,m,b)",
  });
  expect(validateFinancialNumberString("..5b")).toEqual({
    valid: false,
    errorMessage:
      "Input must contain numbers/decimal place excluding the last character abbreviation (h,k,m,b)",
  });
});
