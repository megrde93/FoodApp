import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1> My Landing page</h1>
      <Link to="RandomIngredients">
        <button>Lets GO</button>
      </Link>
    </div>
  );
};

export default Landing;
