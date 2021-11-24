import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vegetarian from "./Vegetarian";
import Season from "./Season";
import Results from "./Results";

const proteinArr = [];
const springArr = [];
const summerArr = [];
const winterArr = [];
const fallArr = [];
const allArr = [];
const carbsArr = [];
const resultsArr = [];

const RandomIngredients = () => {
  const [displayVeg, setDisplayVeg] = useState(true);
  const [isVeg, setIsVeg] = useState(false);

  const isVegVar = (bool) => {
    setIsVeg(bool);
    setDisplayVeg(!displayVeg);
  };
  console.log(isVeg);
  console.log(isVegVar);
  return (
    <div>
      <header>
        <Link to="/">Take me back to the info page</Link>
      </header>
      <h1> Welcome To the Random Ingredient Selector</h1>
      <h2> Please answer the questions below to get started</h2>
      <Vegetarian isVegVar={isVegVar} displayVeg={displayVeg} />
      {/* isvegvar is a bool value, is veg =true is the veg value  */}
      <Season />
      <Results />
    </div>
  );
};

export default RandomIngredients;
