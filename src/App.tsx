import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { InputPage, OutputPage } from "./pages";
import {
  FinancialNumberContext,
  FinancialNumberRepresentation,
  financialNumberRepresentationDefaultValue,
} from "./utils/FinancialNumberContext";

function App() {
  const [financialNumberRepresentation, setFinancialNumberRepresentation] =
    useState<FinancialNumberRepresentation>(
      financialNumberRepresentationDefaultValue
    );

  return (
    <div className="App">
      <header className="App-header">
        <FinancialNumberContext.Provider
          value={{
            financialNumberRepresentation,
            setFinancialNumberRepresentation,
          }}
        >
          <Routes>
            <Route path="/" element={<InputPage />} />
            <Route path="/output" element={<OutputPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </FinancialNumberContext.Provider>
      </header>
    </div>
  );
}

export default App;
