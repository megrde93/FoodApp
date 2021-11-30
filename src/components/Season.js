import React from "react";

const Season = (props) => {
  return (
    props.displaySeason && (
      <div>
        <h3> Would you like to use seasonal ingredients?</h3>
        <button onClick={() => props.toSetSeasonValues(1)}> Spring</button>
        <button onClick={() => props.toSetSeasonValues(2)}> Summer </button>
        <button onClick={() => props.toSetSeasonValues(3)}> Winter </button>
        <button onClick={() => props.toSetSeasonValues(4)}> Fall </button>
        <button onClick={() => props.toSetSeasonValues(0)}>I don't care</button>
      </div>
    )
  );
};

export default Season;
