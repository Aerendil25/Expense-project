import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import { HistoryContext } from "../context/historyContext";
import { Button } from "reactstrap";

const TextMap = () => {
  const [page, setPage] = useState(1);
  const { textList, setTextList } = useContext(HistoryContext);

  const handleDelete = (list) => {
    setTextList(textList.filter((el) => el.id !== list.id));
  };

  const handlePrev = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  return (
    <section>
      <h5>History</h5>
      <hr />
      {textList.slice(page * 3, page * 3 + 3).map((list) => (
        <div className="list">
          <div className="d-flex total">
            <div>
              <span className="delete">
                <DeleteIcon onClick={() => handleDelete(list)} />
              </span>
              <span>{list.text}</span>
            </div>

            <div className={list.amount > 0 ? "income" : "expense"}>
              {list.amount > 0 ? "+" + list.amount : list.amount}
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex">
        <Button disabled={page <= 1} onClick={handlePrev}>
          Prev
        </Button>
        <Button
          disabled={Math.floor(textList.length / 3) <= page}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default TextMap;
