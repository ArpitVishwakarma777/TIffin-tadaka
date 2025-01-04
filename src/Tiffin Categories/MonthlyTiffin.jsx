import React from "react";
import axios from 'axios'
import { NewCard } from "../Helper/Cards.jsx";
function MonthlyTiffin() {
  const [monthlyData, setMonthlyData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/Menu/monthlyCard`
        );
        console.log(response.data);
        setMonthlyData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return monthlyData.map((card) => {
    return <NewCard card={card} />;
  });
}

export default MonthlyTiffin;
