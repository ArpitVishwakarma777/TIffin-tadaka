import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import axios from "axios";
function Testimonial() {
  const [data, setData] = useState([]);
  console.log("re-render");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/home/testimonial/customer"
        );
        // console.log(response.data);

        setData(response.data); // Store the fetched data in state.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run only once

  // console.log(data);

  return (
    <>
      <section class="testimonial text-center">
        <div class="container">
          <div class="heading white-heading">Testimonial</div>
          <div
            id="testimonial4"
            class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
            data-ride="carousel"
            data-interval="2000"
            data-duration="2000"
          >
            <div class="carousel-inner" role="listbox">
              {data.map((item, index) => (
                <div class={`carousel-item ${index===0 &&" active"}` }>
                  <div class="testimonial4_slide">
                    <img
                      src={item.src}
                      class="img-circle img-responsive"
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
              class="carousel-control-prev"
              href="#testimonial4"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a
              class="carousel-control-next"
              href="#testimonial4"
              data-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
