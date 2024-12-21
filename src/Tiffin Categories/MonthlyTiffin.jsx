import React from "react";
import { NewCard, monthlydata } from "../Helper/Cards.jsx";
function MonthlyTiffin() {
  return monthlydata.map((card) => {
    return <NewCard card={card} />;
  });
}

export default MonthlyTiffin;
