import React from "react";
import { NewCard, weeklydata } from "../Helper/Cards.jsx";
function WeeklyTiffin() {
  return weeklydata.map((card) => {
    return <NewCard card={card} />;
  });
}

export default WeeklyTiffin;
