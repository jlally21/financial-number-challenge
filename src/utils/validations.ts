import { FinancialNumberTypes } from "./FinancialNumberTypes";
import {
  endsWith,
  getStringWithLastCharacterRemoved,
  isStringOnlyContainsDigitsOrDecimal,
} from "./helpers";

export const validateFinancialNumberString = (str: string) => {
  const validationObject = {
    valid: true,
    errorMessage: null,
  };

  const validInputEndings = Object.values(FinancialNumberTypes);
  if (!endsWith(str, validInputEndings)) {
    return {
      valid: false,
      errorMessage: `Input must end with valid financial number abbreviation (${validInputEndings})`,
    };
  }

  const strWithLastCharacterRemoved = getStringWithLastCharacterRemoved(str);
  if (!isStringOnlyContainsDigitsOrDecimal(strWithLastCharacterRemoved)) {
    return {
      valid: false,
      errorMessage: `Input must contain numbers/decimal place excluding the last character abbreviation (${validInputEndings})`,
    };
  }

  return validationObject;
};
