import React from "react";
import image from "../../../images/lemon.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard.css";

function SpecialCard() {
  return (
    <div className="card">
      <img src="https://images.pexels.com/photos/2680603/pexels-photo-2680603.jpeg" />
      <div className="card-content">
        <div className="card-title">
          <h4>Chocolate Fudge Cake</h4>
          <p className="price">$ 5.99</p>
        </div>
        <p>
          Indulge in our rich Chocolate Fudge Cake,
          layered with decadent chocolate ganache and moist chocolate sponge. 
          A perfect treat for chocolate lovers.
        </p>
        
      </div>
    </div>
  );
}

export default SpecialCard;
