import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import Dalbati from "../assets/image/Dal Bati.jpeg";
import DalChaval from '../assets/image/dal_chaval.jpg'
import Sev from "../assets/image/Sev.jpeg";
import Paratha from "../assets/image/aloo parratha.jpeg";
import Poori from "../assets/image/Poori.jpeg";
import FullThal from "../assets/image/Indian veg thali.jpeg";
import MakkaChapati from "../assets/image/Makki Ki Roti Sarson Ka Saag.png";
export const carddata = [
  {
    src: Dalbati,
    title: "Dal-Bati",
    textClass: "card_text1",
    text: " A plate with 5 ghee-soaked Batis, served with a bowl of hot Dal and fresh salad.",
    price: 200,
  },

  {
    src: Paratha,
    title: "Dahi-Paratha",
    textClass: "card_text2",
    text: "(Panjabi Tad)A serving of 5 soft parathas with fresh yogurt and flavorful spices.",
    price: 200,
  },
  {
    src: Sev,
    title: "sev-veg & more",
    textClass: "card_text3",
    text: "A plate with 4-5 soft rotis, extra crispy gram flour noodles curry,and salad.",
    price: 200,
  },
  {
    src: Poori,
    title: "Poori special",
    textClass: "card_text4",
    text: " Enjoy 5 fluffy puris paired with a flavorful potato curry and a side of fresh salad.",
    price: 200,
  },
  {
    src: FullThal,
    title: "Full-thali",
    textClass: "card_text5",
    text: " India flavors in one plate Roti, Sabji, Dahi, Salad, and more complete thali.",
    price: 200,
  },
  {
    src: MakkaChapati,
    title: "Chapati special",
    textClass: "card_text3",
    text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
    price: 200,
  },
  {
    src: MakkaChapati,
    title: "Chapati special",
    textClass: "card_text3",
    text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
    price: 200,
  },
  {
    src:DalChaval,
    title: "Chapati special",
    textClass: "card_text3",
    text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
    price: 200,
  },
];
function Cards() {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <>
      <div className="container card-container py-2">
        <div className="row">
          {carddata.map((card) => {
            return (
              <div className=" card-box col-sm-4 col-lg-3 col-xs-6 pb-sm-3  px-3 py-3 ">
                <div className="card box-shadow">
                  <img src={card.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className={card.textClass}>
                      {readMore ? card.text : null}
                      <button
                        style={{ textDecoration: "none", border: "none" }}
                        className=" btn-link"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? "Read Less" : "Read More"}
                      </button>
                    </p>
                    <div>
                      <span>
                        {" "}
                        <Link to={'/Menu'} className="btn me-5  btn-primary">
                          Add Card
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export const NewCard = ({ card }) => {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <>
      <div className=" card-box col-xl-3 col-md-4 col-sm-6 col-xs-6 pb-sm-3  px-3 py-3 ">
        <div className="card box-shadow">
          <img src={card.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className={card.textClass}>
              {readMore ? card.text : null}
              {/* <button
                style={{ textDecoration: "none", border: "none" }}
                className=" btn-link"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </button> */}
            </p>
            <div>
              <span>
                {" "} 
                <Link href="#" className="btn me-xxl-5 me-4 me-md-2 me-lg-5 me-xl-5  btn-primary">
                  Add Card
                </Link>
              </span>
              <span className="oneday_price ms-xxl-4 ">${card.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
