import React from "react";
import axios from "axios";
import { NewCard} from "../Helper/Cards.jsx";
function WeeklyTiffin() {
  const [weeklyData, setWeeklyData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/Menu/weeklyCard"
        );
        console.log(response.data);
        setWeeklyData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return weeklyData.map((card) => {
    return <NewCard card={card} />;
  });
}

export default WeeklyTiffin;
