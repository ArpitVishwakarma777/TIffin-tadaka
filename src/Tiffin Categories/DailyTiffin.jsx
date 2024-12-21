import React from 'react'
import { NewCard, dailydata } from "../Helper/Cards.jsx";
function DailyTiffin() {
  return (
    dailydata.map((card) => {
                return <NewCard card={card} />;
              })
  )
}

export default DailyTiffin