import { Link } from "react-router-dom";
import {
  financialNumberRepresentationDefaultValue,
  useFinancialNumberContext,
} from "../utils/FinancialNumberContext";
import { calculateNumberValueFromFinancialNumberRepresentation } from "../utils/helpers";

export const OutputPage = () => {
  const { financialNumberRepresentation, setFinancialNumberRepresentation } =
    useFinancialNumberContext();

  const numberOutput = calculateNumberValueFromFinancialNumberRepresentation(
    financialNumberRepresentation
  );

  const numberOutputToString = numberOutput.toLocaleString();

  return (
    <div>
      Output
      <div>{numberOutputToString}</div>
      <Link
        to="/"
        onClick={() =>
          setFinancialNumberRepresentation(
            financialNumberRepresentationDefaultValue
          )
        }
      >
        Back to input
      </Link>
    </div>
  );
};
