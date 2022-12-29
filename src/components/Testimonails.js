import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonails = () => {
  return (
    <div  id="testimonials" className="testimonials">
      <h1 className="text-center">happy clients</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
