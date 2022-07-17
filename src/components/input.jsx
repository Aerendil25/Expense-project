import { nanoid } from "nanoid";
import { Input } from "reactstrap";
import { useContext, useEffect } from "react";
import { HistoryContext } from "../context/historyContext";

const InputText = () => {
  const {
    inputText,
    setInputText,
    textList,
    setTextList,
    inputAmount,
    setInputAmount
  } = useContext(HistoryContext);

  const handleAmount = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const newHistory = JSON.parse(localStorage.getItem("saved-data"));
    if (newHistory) {
      setTextList(newHistory);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("saved-data", JSON.stringify(textList));
    });
  }, [textList]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!inputText.trim()) alert("Enter the comment");
    else if (!inputAmount.trim()) alert("Enter the value");
    else
      setTextList([
        ...textList,
        { id: nanoid(), text: inputText, amount: inputAmount }
      ]);

    setInputText("");
    setInputAmount("");
  };
  return (
    <form onSubmit={(e) => handleClick(e)}>
      <h5>Add new transaction</h5>
      <hr />
      <section>
        <label>Text</label>
        <Input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          placeholder="Enter text..."
        />
      </section>
      <section>
        <div>Amount (negative - expense, positive - income)</div>
        <Input
          onChange={(e) => handleAmount(e)}
          value={inputAmount}
          type="number"
          placeholder="Enter amount..."
        />
      </section>
      <button className="btn btn-primary">Add transaction</button>
    </form>
  );
};

export default InputText;
