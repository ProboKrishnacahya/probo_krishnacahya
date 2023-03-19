import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "404 Page Not Found";
  }, []);

  return (
    <div className="container">
      <div
        className="vh-100 d-grid justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <div className="d-block mx-auto">
          <img
            src="images/404/404_page_not_found.svg"
            alt="404 Page Not Found"
          />
        </div>
        <div className="card text-center">
          <span>
            <h5>
              <i className="bi bi-exclamation-circle"></i>&emsp;404 Page Not
              Found
            </h5>
          </span>
          <hr />
          <p className="fs-4">
            Oops.. The page you are looking for was not found. Please try again.
          </p>
          <br />
          <NavLink className="btn btn-primary btn-lg" to="/">
            <i className="bi bi-house-door"></i>&emsp;
            <strong>Back to Home</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
