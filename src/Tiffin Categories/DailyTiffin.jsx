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
          "http://localhost:8000/api/menu/oneDayCard"
        );

        setData(response.data); // Store the fetched data in state.
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData(); // Call the fetch function
  }, []);
  return data.map((card) => {
    return <NewCard card={card} />;
  });
}

export default DailyTiffin;
