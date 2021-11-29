import React from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props.allMyResults);
  return (
    props.displayResults && (
      <div>
        <h2> Your Ingredients are</h2>
        <h2>Protein: {props.myProtienResults} </h2>
        <h2> Vegetable: {props.myVegetableResults}</h2>
        <h2> Carb: {props.myCarbResults} </h2>
        <div>
          <h3> Hate your results?</h3>
          <button onClick={() => window.location.reload(false)}>
            Try Again
          </button>
          <h3> Love it but need inspiration?</h3>

          <Link
            className={"link"}
            to={{
              pathname: `/Recipes`,
              state: {
                allMyResults:
                  props.myProtienResults +
                  " " +
                  props.myVegetableResults +
                  " " +
                  props.myCarbResults,
              },
            }}
          >
            <button> Help Me Find Dinner! </button>{" "}
          </Link>
        </div>
      </div>
    )
  );
};

export default Results;
