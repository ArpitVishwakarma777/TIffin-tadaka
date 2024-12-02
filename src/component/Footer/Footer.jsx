import React from 'react'
import { Link, } from 'react-router-dom';
import './Footer.css'
export default function Footer() {
    return (
     <footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center text-align-center justify-content-lg-around p-4 border-bottom">
    <div className="me-5 d-none d-lg-block media_text">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <Link href className="rounded-circle btn btn_footer btn-outline btn-floating m-1">
        <i className="fab fa-facebook-f" />
      </Link>
      <Link href className=" btn btn_footer rounded-circle btn-outline btn-floating m-1">
        <i className="fab fa-twitter" />
      </Link>
      <Link href className="btn btn_footer rounded-circle btn-outline btn-floating m-1">
        <i className="fab fa-google" />
      </Link>
      <Link href className="btn btn_footer rounded-circle btn-outline btn-floating m-1">
        <i className="fab fa-instagram" />
      </Link>
      <Link href className="btn btn_footer rounded-circle btn-outline btn-floating m-1">
        <i className="fab fa-linkedin" />
      </Link>
      <Link href className="btn btn_footer rounded-circle btn-outline btn-floating m-1">
        <i className="fab fa-github" />
      </Link>
    </div>
  </section>
  <section className>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Tiffin Service
          </h5>
          <p>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h5 className=" main-teaxt text-uppercase fw-bold mb-4">Products</h5>
          <p>
            <Link to="/Home" className="text-reset">
            Home
            </Link>
          </p>
          <p>
            <Link to="/Menu" className="text-reset">
           Tiffin
            </Link>
          </p>
          <p>
            <Link to="/About" className="text-reset">
              About
            </Link>
          </p>
          <p>
            <Link to="/Contact" className="text-reset">
            Contact Us
            </Link>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4">Useful links</h5>
          <p>
            <Link to="" className="text-reset">
              Pricing
            </Link>
          </p>
          <p>
            <Link to="" className="text-reset">
              Settings
            </Link>
          </p>
          <p>
            <Link to="" className="text-reset">
              Orders
            </Link>
          </p>
          <p>
            <Link to="" className="text-reset">
              Help
            </Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
          <p>
            <i className="fas fa-home me-3" /> INDIA, MP 47, Handia
          </p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p>
            <i className="fas fa-phone me-3" /> + 91 810 313 709
          </p>
          <p>
            <i className="fas fa-print me-3" /> +91 810 313 709
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    <h5>Since August 2024</h5>
  </div>
</footer>

    );
}
