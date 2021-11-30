import React from "react";

const GoButton = (props) => {
  return (
    props.displayGoButton && (
      <div>
        <button onClick={() => props.toSetResults()}>It's go time!</button>
      </div>
    )
  );
};
export default GoButton;
