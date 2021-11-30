import React from "react";
import seasonImg from "../images/icons8-calendar.gif";

const Season = (props) => {
  return (
    props.displaySeason && (
      <div>
        <div>
          <h3> Would you like to use seasonal ingredients?</h3>
          <button onClick={() => props.toSetSeasonValues(1)}> Spring</button>
          <button onClick={() => props.toSetSeasonValues(2)}> Summer </button>
          <button onClick={() => props.toSetSeasonValues(3)}> Winter </button>
          <button onClick={() => props.toSetSeasonValues(4)}> Fall </button>
          <button onClick={() => props.toSetSeasonValues(0)}>
            I don't care
          </button>
        </div>
        <img className="seasonImg" src={seasonImg} alt="Seasons" />
      </div>
    )
  );
};

export default Season;
