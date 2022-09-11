import { createContext, useContext } from "react";
import { FinancialNumberTypes } from "./FinancialNumberTypes";

export type FinancialNumberRepresentation = {
  abbreviation: FinancialNumberTypes | null;
  number: number | null;
  valid: boolean;
};

export const financialNumberRepresentationDefaultValue = {
  abbreviation: null,
  number: 0,
  valid: false,
};

export type FinancialNumberContent = {
  financialNumberRepresentation: FinancialNumberRepresentation;
  setFinancialNumberRepresentation: (
    fNR: FinancialNumberRepresentation
  ) => void;
};

export const FinancialNumberContext = createContext<FinancialNumberContent>({
  financialNumberRepresentation: financialNumberRepresentationDefaultValue,
  setFinancialNumberRepresentation: () => {},
});

export const useFinancialNumberContext = () =>
  useContext(FinancialNumberContext);
