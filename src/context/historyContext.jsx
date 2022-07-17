import { createContext } from "react";
import { useState } from "react";

export const HistoryContext = new createContext();

export const HistoryProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [textList, setTextList] = useState([]);
  const [inputAmount, setInputAmount] = useState("");

  return (
    <HistoryContext.Provider
      value={{
        inputText,
        setInputText,
        textList,
        setTextList,
        inputAmount,
        setInputAmount
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
