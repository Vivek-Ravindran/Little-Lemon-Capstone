import React from "react";
import SpecialCard from "./Card/SpecialCard";
import "./Specials.css";

function Specials() {
  return (
    <div className="specials-bg" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg")`
    }}>
      <div className="container">
        <div className="specials">
          <h1>This Week's Specials</h1>
          <div className="specials-grid">
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
