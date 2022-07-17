import { HistoryContext } from "../context/historyContext";
import { useContext } from "react";
const IncomeExpense = () => {
  const { textList } = useContext(HistoryContext);

  const income = textList.reduce((acc, num) => {
    return (acc += num.amount > 0 ? Number(num.amount) : 0);
  }, 0);

  const expense = textList.reduce((acc, num) => {
    return (acc += num.amount < 0 ? Number(num.amount) : 0);
  }, 0);

  const total = (Number(income) + Number(expense)).toFixed(2);

  return (
    <section>
      <h5>YOUR BALANCE</h5>
      <h1>${total || "0.00"}</h1>
      <div className="d-flex box">
        <div>
          INCOME
          <div className="income">${income || "0.00"}</div>
        </div>
        <div>
          EXPENSE
          <div className="expense">${expense ? expense * -1 : "0.00"}</div>
        </div>
      </div>
    </section>
  );
};

export default IncomeExpense;
