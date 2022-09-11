import { useState } from "react";
import { Link } from "react-router-dom";
import { useFinancialNumberContext } from "../utils/FinancialNumberContext";
import { getFinancialNumberRepresentationFromString } from "../utils/helpers";
import { validateFinancialNumberString } from "../utils/validations";

export const InputPage = () => {
  const { financialNumberRepresentation, setFinancialNumberRepresentation } =
    useFinancialNumberContext();
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;

    const { valid, errorMessage } = validateFinancialNumberString(inputValue);

    if (!valid) {
      setError(errorMessage);
    } else {
      setError(null);
      const { abbreviation, number } =
        getFinancialNumberRepresentationFromString(inputValue);
      setFinancialNumberRepresentation({ abbreviation, number, valid: true });
    }
  };

  return (
    <div>
      <div>Input</div>
      <input onChange={handleInputChange} />
      {error && (
        <div style={{ color: "red", fontSize: 18 }}>Error: {error}</div>
      )}
      <br />
      {financialNumberRepresentation.valid && !error && (
        <Link to="/output">See output</Link>
      )}
    </div>
  );
};
