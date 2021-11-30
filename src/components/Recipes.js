import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogoJr from "../images/Random Meal Generator (5).png";
import ChefHat from "../images/icons8-cafe-50.png";

const Recipes = (props) => {
  console.log(props);
  const [recipeOne, setRecipeOne] = React.useState("Loading Deliciousness...");
  const [recipeTwo, setRecipeTwo] = React.useState("");
  const [recipeThree, setRecipeThree] = React.useState("");
  const [recipeFour, setRecipeFour] = React.useState("");
  const [recipeFive, setRecipeFive] = React.useState("");
  const [recipeSix, setRecipeSix] = React.useState("");
  React.useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${props.location.state.allMyResults.replace(
          "%20",
          " "
        )}&app_id=b56e8775&app_key=5a2823f8dcc1d90519c0184dc8d86d4f`
      )
      .then((info) => {
        console.log("This is our info:", info.data.hits);
        setRecipeOne(info.data.hits[0].recipe);
        setRecipeTwo(info.data.hits[1].recipe);
        setRecipeThree(info.data.hits[2].recipe);
        setRecipeFour(info.data.hits[3].recipe);
        setRecipeFive(info.data.hits[4].recipe);
        setRecipeSix(info.data.hits[5].recipe);
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  });
  console.log(recipeOne);

  let allMyResults = props.location.state.allMyResults;

  allMyResults = allMyResults.split(" ");
  let ingredients = allMyResults.splice(1);
  ingredients = ingredients.join(", & ");

  let string = `${allMyResults}, ${ingredients}`;

  return (
    <div>
      <header>
        <div className="infoLinkBar">
          <Link className="infoLink" to="/">
            Take me back to the info page
          </Link>
          <img className="LogoJr" src={LogoJr} alt="Dinner Time Mini Logo" />
        </div>
      </header>
      <img className="chefsHatImg" src={ChefHat} alt="chefs hat" />
      <h1 className="dinnerTime"> DinnerTime</h1>
      <h2 className="recipePage">Your results were {string}</h2>
      <h2 className="recipePage"> Here's what we found for you: </h2>

      <div className="grid">
        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeOne.label}</li>
            <img src={recipeOne.image} alt={recipeOne.label} />
            <li> Total Time: {recipeOne.totalTime} Min</li>
            <li> Servings: {recipeOne.yield} </li>
            <li>
              <a target="blank" href={recipeOne.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeTwo.label}</li>
            <img src={recipeTwo.image} alt={recipeTwo.label} />
            <li> Total Time: {recipeTwo.totalTime} Min</li>
            <li> Servings: {recipeTwo.yield} </li>
            <li>
              <a target="blank" href={recipeTwo.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeThree.label}</li>
            <img src={recipeThree.image} alt={recipeThree.label} />
            <li> Total Time: {recipeThree.totalTime} Min</li>
            <li> Servings: {recipeThree.yield} </li>
            <li>
              <a target="blank" href={recipeThree.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeFour.label}</li>
            <img src={recipeFour.image} alt={recipeFour.label} />
            <li> Total Time: {recipeFour.totalTime} Min</li>
            <li> Servings: {recipeFour.yield} </li>
            <li>
              <a target="blank" href={recipeFour.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeFive.label}</li>
            <img src={recipeFive.image} alt={recipeFive.label} />
            <li> Total Time: {recipeFive.totalTime} Min</li>
            <li> Servings: {recipeFive.yield} </li>
            <li>
              <a target="blank" href={recipeFive.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <ul className="lists">
            <li className="listTitle">{recipeSix.label}</li>
            <img src={recipeSix.image} alt={recipeSix.label} />
            <li> Total Time: {recipeSix.totalTime} Min</li>
            <li> Servings: {recipeSix.yield} </li>
            <li>
              <a target="blank" href={recipeSix.url}>
                Find This Recipe Here!
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/RandomIngredients">
        <button className="recipeBottom">
          I don't think so. I want to try again.
        </button>
      </Link>
    </div>
  );
};

export default Recipes;
