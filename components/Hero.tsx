import React from "react";
import RecipeReviewCard from "./Card";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="hero__title">
          Find, book, or rent a car --quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <RecipeReviewCard />
      </div>
    </div>
  );
};

export default Hero;
