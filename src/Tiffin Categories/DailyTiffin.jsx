import React from "react";
import { NewCard } from "../Helper/Cards.jsx";
import { useSelector } from "react-redux";
import axios from "axios";
function DailyTiffin() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/menu/oneDayCard`
        );  
        setData(response.data); 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return data.map((card) => {
    return <NewCard card={card} />;
  });
}

export default DailyTiffin;
