import React, { useState } from "react";
import MoneyChangeList, {
  MoneyChangeListProps
} from "../money-change-list/money-change-list";

const App = () => {
  const [moneyChanges, setMoneyChanges] = useState([
    { id: 1, value: 50 },
    { id: 2, value: 200 },
    { id: 3, value: -1000 }
  ]);

  setTimeout(() => {
    const copy = moneyChanges.map(e => e);
    copy.forEach(c => (c.value += 5));
    setMoneyChanges(copy);
  }, 10);

  return <MoneyChangeList values={moneyChanges} />;
};

export default App;
