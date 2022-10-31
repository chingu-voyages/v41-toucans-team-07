import React from "react";
import "./Error.scss";
import error from "../../assets/error/404.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <div className="container">
        <img src={error} alt="" className="error-img" />
        <h1>AYE AYE!</h1>
        <p>
          Sorry fellow pirates! We couldn't find the page you are looking for
        </p>
        <p>
          Go back to <Link to="./">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Error;
