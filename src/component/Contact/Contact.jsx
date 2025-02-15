import React, { memo, useEffect } from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import axios from "axios";
function Contact() {
  const tiffinAddress = useSelector(
    (state) => state.managetAddressStatus.tiffinAddress || []
  );
  const [isLoad, setload] = React.useState(false);

  return (
    <section className=" py-3 pb-md-5">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h2 className="primary-size m-4  ">Contact Us</h2>
        </div>
<div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <p className=" mb-5 text-center  fs-3">
            We believe in the power of teamwork and collaboration. Our diverse
            experts work tirelessly to deliver innovative solutions tailored to
            our clients' needs.
          </p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
        </div>
        <div className="row d-flex flex-wrap gy-3 gy-md-4 gy-lg-0 align-items-md-center">
          <div className="col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 mt-5 col-xl-11">
                <div className="d-flex my-5">
                  <div className="me-4 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-geo"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3 fw-bold fs-3 ">Address</h4>
                    <address className="mb-0 fs-4 text-dark">
                      {tiffinAddress.map((data) => {
                        return data.address;
                      })}
                      , India
                    </address>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-12 col-sm-6 ">
                    <div className="d-flex  mb-sm-0">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="currentColor"
                          className="bi bi-telephone-outbound"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="mb-3 fw-bold fs-3">Phone</h4>
                        <p className="mb-0 fs-4">
                          (+91)
                          {tiffinAddress.map((data) => {
                            return data.phone;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap my-5">
                  <div className="me-4 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-alarm"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                      <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3 fw-bold fs-3">Opening Hours</h4>
                    <div className="d-flex mb-1 ">
                      <p className="text-dark fw-bold mb-0 fs-4 me-5">
                        Mon - Fri
                      </p>
                      <p className="text-dark mb-0 fs-4">9am - 5pm</p>
                    </div>
                    <div className="d-flex">
                      <p className="text-dark fw-bold fs-4 mb-0 me-5">
                        Sat - Sun
                      </p>
                      <p className="text-dark mb-0 fs-4">9am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex  align-items-center justify-content-center">
            {isLoad === false && (
              <div
                class="spinner-border position-relative  top-100 start-50  "
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.0870227425262!2d77.08867732052424!3d22.340670425536857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d70da30805abf%3A0x1368c14a9092d58b!2sHarda%2C%20Madhya%20Pradesh%20461331!5e0!3m2!1sen!2sin!4v1733383118109!5m2!1sen!2sin"
              onLoad={() => {
                setload(true);
              }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
