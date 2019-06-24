import React from "react";
import "./money-change-list.scss";
import { MoneyChangeEntry } from "../../models/money-change-entry";
import MoneyChange from "../money-change/money-change";

export interface MoneyChangeListProps {
  values: Array<MoneyChangeEntry>;
}

const MoneyChangeList = (props: MoneyChangeListProps) => {
  const sum = props.values.reduce((a, v) => (a += v.value), 0);
  return (
    <div className="money-change-list">
      <ul className="money-change-list__list">
        {props.values.map(v => {
          return (
            <li key={v.id}>
              <MoneyChange moneyChangeEntry={v} />
            </li>
          );
        })}
      </ul>
      <div className="money-change-list__total">
        <MoneyChange moneyChangeEntry={{ value: sum }} />
      </div>
    </div>
  );
};

export default MoneyChangeList;
