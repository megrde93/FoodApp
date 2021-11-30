import React from "react";
import VegetarianImg from "../images/icons8-vegetarian-64.png";

const Vegetarian = (props) => {
  return (
    props.displayVeg && (
      <div className="veggiePage">
        <div>
          <h3> Do you want your ingredients to be vegetarian?</h3>
          <button onClick={() => props.toSetVegetarianValues(true)}>
            {" "}
            Yes{" "}
          </button>
          <button onClick={() => props.toSetVegetarianValues(false)}>
            {" "}
            No{" "}
          </button>
        </div>
        <img className="veggieImg" src={VegetarianImg} alt="Vegeatrian" />
      </div>
    )
  );
};

export default Vegetarian;
