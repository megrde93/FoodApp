import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vegetarian from "./Vegetarian";
import Season from "./Season";
import GoButton from "./GoButton";
import Results from "./Results";
import ChefHat from "../images/icons8-cafe-50.png";
import LogoJr from "../images/Random Meal Generator (5).png";

const proteinArr = ["Chicken", "Beef", `Shrimp`, `Pork`, `Turkey`];
const springArr = [
  "Asparagus",
  "Broccoli",
  "Carrots",
  "Peas",
  "Radishes",
  "Turnips",
];
const summerArr = [
  `Beets`,
  `Bell Peppers`,
  `Corn`,
  `Eggplant`,
  `Green Beans`,
  `Okra`,
  `Summer Squash`,
  `Zucchini`,
];
const winterArr = [
  `Brussels Sprouts`,
  `Sweet Potatoes `,
  `Winter Squash`,
  `Parsnip`,
  `Cabbage`,
  `Carrot`,
];
const fallArr = [
  `Broccoli`,
  `Brussels Sprouts`,
  `Cauliflower`,
  `Pumpkin`,
  `Sweet Potatoes `,
  `Winter Squash`,
];
const allArr = [...springArr, ...summerArr, ...fallArr, ...winterArr];
const carbsArr = ["Rice", "Pasta", "polenta", "potato"];

const RandomIngredients = () => {
  const [displayVeg, setDisplayVeg] = useState(true);
  const [isVeg, setIsVeg] = useState(false);
  const [displaySeason, setDisplaySeason] = useState(false);
  const [whatSeason, setWhatSeason] = useState();
  const [displayGoButton, setDisplayGoButton] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  const toSetVegetarianValues = (bool) => {
    setIsVeg(bool);
    setDisplayVeg(!displayVeg);
    setDisplaySeason(!displaySeason);
  };
  // set is veg stores boolean, set display stores display on off,
  //  to set vegetarian values is the whole thing

  const toSetSeasonValues = (number) => {
    setWhatSeason(number);
    setDisplaySeason(!displaySeason);
    setDisplayGoButton(!displayGoButton);
  };

  const toSetResults = () => {
    setDisplayGoButton(!displayGoButton);
    setDisplayResults(!displayResults);
  };

  const myProtien = () => {
    if (isVeg === true) {
      return `Vegetarian`;
    } else {
      return proteinArr[Math.floor(Math.random() * proteinArr.length)];
    }
  };
  const myCarb = () => {
    return carbsArr[Math.floor(Math.random() * carbsArr.length)];
  };
  const myVegetable = () => {
    if (whatSeason === 1) {
      return springArr[Math.floor(Math.random() * springArr.length)];
    } else if (whatSeason === 2) {
      return summerArr[Math.floor(Math.random() * summerArr.length)];
    } else if (whatSeason === 3) {
      return winterArr[Math.floor(Math.random() * winterArr.length)];
    } else if (whatSeason === 4) {
      return fallArr[Math.floor(Math.random() * fallArr.length)];
    } else {
      return allArr[Math.floor(Math.random() * allArr.length)];
    }
  };

  let myProtienResults = myProtien();
  let myVegetableResults = myVegetable();
  let myCarbResults = myCarb();
  let allMyResults =
    myProtienResults + " " + myVegetableResults + " " + myCarbResults;

  return (
    <div>
      <header>
        <div className="infoLinkBar">
          <Link className="infoLink" to="/">
            Take me back to the info page
          </Link>
          <img className="LogoJr" src={LogoJr} alt="chefs hat" />
        </div>
      </header>
      <img className="chefsHatImg" src={ChefHat} alt="chefs hat" />
      <h1 className="dinnerTime"> DinnerTime</h1>
      <h1 className="mealGenerator "> The Random Meal Generator</h1>
      <Vegetarian
        toSetVegetarianValues={toSetVegetarianValues}
        displayVeg={displayVeg}
      />
      <Season
        toSetSeasonValues={toSetSeasonValues}
        displaySeason={displaySeason}
      />
      <GoButton displayGoButton={displayGoButton} toSetResults={toSetResults} />
      <Results
        displayResults={displayResults}
        myProtienResults={myProtienResults}
        myCarbResults={myCarbResults}
        myVegetableResults={myVegetableResults}
        allMyResults={allMyResults}
      />
    </div>
  );
};

export default RandomIngredients;
