import React from "react";
import "./Testimonials.css";
import TestimonialsCard from "./Card/TestimonialsCard";
import person1 from "../../images/persons/person1.jpeg";
import person2 from "../../images/persons/person2.jpeg";
import person3 from "../../images/persons/person3.jpeg";
import person4 from "../../images/persons/person4.jpeg";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials-bg">
      <div className="container">
        <div className="testimonials">
          <h1>Customer Reviews</h1>
          <div className="testimonials-grid">
            <TestimonialsCard
              name="Alice"
              photo={person1}
              stars="5"
              comment={"Every dish at Little Lemon is bursting with flavor and perfectly cooked."}
            />
            <TestimonialsCard
              name="John"
              photo={person2}
              stars="5"
              comment={
                "I love how fresh and high-quality the ingredients are at Little Lemon."
              }
            />
            <TestimonialsCard
              name="Florence"
              photo={person3}
              stars="4"
              comment={
                "Little Lemon never disappoints with its amazing and consistently delicious food."
              }
            />
            <TestimonialsCard
              name="Alex"
              photo={person4}
              stars="5"
              comment={
                "Dining at Little Lemon is always a delightful experience with such incredible food."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
