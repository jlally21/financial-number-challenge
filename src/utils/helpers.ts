import { FinancialNumberRepresentation } from "./FinancialNumberContext";
import { FinancialNumberTypes } from "./FinancialNumberTypes";
import { validateFinancialNumberString } from "./validations";

export const endsWith = (str: string, validCharactersToEndWith: string[]) => {
  const endsWith = validCharactersToEndWith.some((validCharacter) =>
    str.endsWith(validCharacter)
  );
  return endsWith;
};

export const isStringOnlyContainsDigitsOrDecimal = (str: string) =>
  /^(\d+)?(\.)?(\d+)?$/.test(str);

export const getStringWithLastCharacterRemoved = (str: string) =>
  str.substring(0, str.length - 1);

export const getFinancialNumberRepresentationFromString = (str: string) => {
  const { valid } = validateFinancialNumberString(str);

  if (!valid) {
    throw Error("String is invalid, does not represent financial number");
  }

  const strWithLastCharacterRemoved = getStringWithLastCharacterRemoved(str);
  const abbreviation: string = str.slice(-1);
  return {
    abbreviation:
      FinancialNumberTypes[abbreviation as keyof typeof FinancialNumberTypes],
    number: Number(strWithLastCharacterRemoved),
  };
};

export const calculateNumberValueFromFinancialNumberRepresentation = ({
  abbreviation,
  number,
  valid,
}: FinancialNumberRepresentation) => {
  if (!valid || !abbreviation || !number) {
    return 0;
  }

  let output = 0;
  switch (abbreviation) {
    case FinancialNumberTypes.h:
      output = number * 100;
      break;
    case FinancialNumberTypes.k:
      output = number * 1000;
      break;
    case FinancialNumberTypes.m:
      output = number * 1000000;
      break;
    case FinancialNumberTypes.b:
      output = number * 1000000000;
      break;
    default:
      break;
  }

  return output;
};
