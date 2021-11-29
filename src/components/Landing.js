import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1> Welcome To The Random Meal Generator</h1>
      <h3> Sick of not knowing what to make?</h3>
      <h3> Tired of planning ahead?</h3>
      <h2>We have the solution! </h2>
      <h3>
        The random meal generator will ask you a few simple questions. Then it
        will select a protien, vegetable and carb for your next meal!{" "}
      </h3>
      <h3>Need recipe ideas? It can help with that too.</h3>
      <Link to="RandomIngredients">
        <button>Lets GO</button>
      </Link>
    </div>
  );
};

export default Landing;
