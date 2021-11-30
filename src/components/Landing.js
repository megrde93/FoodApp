import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <header className="landingBar"></header>
      <h1 className="dinnerTime  "> Welcome To DinnerTime</h1>
      <h1 className="mealGenerator "> The Random Meal Generator</h1>
      <div className="questions">
        <h3> Sick of not knowing what to cook?</h3>
        <h3> Tired of planning ahead?</h3>
      </div>
      <h2 className="landingDiv">We have the solution! </h2>
      <h3>The random meal generator will ask you a few simple questions.</h3>
      <h3 className="landingDiv">
        Then it will select a protien, vegetable and carb for your next meal!{" "}
      </h3>
      <h3>Need recipe ideas? It can help with that too.</h3>
      <Link to="RandomIngredients">
        <button className="landingDiv">Lets GO</button>
      </Link>
    </div>
  );
};

export default Landing;
