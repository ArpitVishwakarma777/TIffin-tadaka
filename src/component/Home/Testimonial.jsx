import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import axios from "axios";
function Testimonial() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/home/testimonial/customer`
        );
     
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); 
  }, []); 

  return (
    <>
      <section className="testimonial text-center">
        <div className="container">
          <div className="heading white-heading">Testimonial</div>
          <div
            id="testimonial4"
            className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
            data-ride="carousel"
            data-interval="2000"
            data-duration="2000"
          >
            <div className="carousel-inner" role="listbox">
              {data.map((item, index) => (
                <div className={`carousel-item ${index===0 &&" active"}` }>
                  <div className="testimonial4_slide">
                    <img
                      src={item.src}
                      className="img-circle img-responsive"
                    />
                    <p>
                    {item.feedback}
                    </p>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonial4"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#testimonial4"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;

