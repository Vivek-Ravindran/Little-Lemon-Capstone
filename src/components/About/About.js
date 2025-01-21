import React from "react";
import image from "../../images/restaurant.jpg";
import "./About.css";

function About() {
  return (
    <div className="container" id="ab">
      <div id="about" className="about">
        <div className="about-grid">
          <div className="about-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod condimentum ante finibus consequat. Donec vitae nisl
              mollis, vehicula sem ut, imperdiet tellus. Duis magna tellus,
              ultrices quis molestie nec, ullamcorper in urna. Mauris accumsan
              tellus mi, vitae rutrum felis scelerisque at.{" "}
            </p>
          </div>
          <div className="about-right">
            <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg" alt="Little Lemon Restaurant" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
