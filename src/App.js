import InputText from "./components/input";
import TextMap from "./components/textMap";
import IncomeExpense from "./components/income";
import { HistoryProvider } from "./context/historyContext";
import "./App.css";

export default function App() {
  return (
    <div className="container">
    <div className="card">
      <h3>Expense Tracker</h3>
      <HistoryProvider>
        <IncomeExpense />
        <TextMap />
        <InputText />
      </HistoryProvider>
    </div>
    </div>
  );
}
