import React from "react";
import "./money-change.scss";
import { MoneyChangeEntry } from "../../models/money-change-entry";

export interface MoneyChangeProps {
  moneyChangeEntry: MoneyChangeEntry;
}

const MoneyChange = (props: MoneyChangeProps) => {
  return (
    <div
      className={
        "money-change " +
        (props.moneyChangeEntry.value > 0 ? "positive" : "negative")
      }
    >
      <span className="money-change__sign">
        {props.moneyChangeEntry.value > 0 ? "+" : "-"}
      </span>
      <span className="money-change__value">
        {Math.abs(props.moneyChangeEntry.value)}
      </span>
    </div>
  );
};

export default MoneyChange;
