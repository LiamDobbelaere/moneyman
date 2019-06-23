import React from "react";
import "./money-change.scss";

interface MoneyChangeProps {
  value: number;
}

const MoneyChange = (props: MoneyChangeProps) => {
  return (
    <div
      className={"money-change " + (props.value > 0 ? "positive" : "negative")}
    >
      <span className="money-change__sign">{props.value > 0 ? "+" : "-"}</span>
      <span className="money-change__value">{Math.abs(props.value)}</span>
    </div>
  );
};

export default MoneyChange;
