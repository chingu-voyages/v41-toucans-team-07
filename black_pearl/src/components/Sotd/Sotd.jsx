import React from "react";
import "./Sotd.scss";
import ship_img from "../../assets/ship 1.webp";

function Sotd() {
  return (
    <section>
      <div className="section-container">
        <h3 className="section-title">Ship of The Day:</h3>
        <div className="sotd-container">
          <img src={ship_img} alt="" className="ship-img" />
          <div className="ship-desc">
            <h3 className="ship-title">The Dying Gull</h3>
            <p>
              This small sloop was introduced in 2017's Dead Men Tell No Tales
              and represented another temporary stopgap while Jack's Black Pearl
              was otherwise unavailable to him, still shrunken inside
              Blackbeard's bottle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sotd;
