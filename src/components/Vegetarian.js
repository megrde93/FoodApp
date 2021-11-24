import React from "react";

const Vegetarian = (props) => {
  return (
    props.displayVeg && (
      <div>
        <h3> Do you want your ingredients to be vegetarian?</h3>
        <button onClick={() => props.isVegVar(true)}> Yes </button>
        <button onClick={() => props.isVegVar(false)}> No </button>
      </div>
    )
  );
};

export default Vegetarian;
