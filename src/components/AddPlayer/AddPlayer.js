import React from "react";
import "./AddPlayer.css";

const AddPlayer = props => {
  let input;

  const onSubmit = event => {
    event.preventDefault();
    props.onPlayerAdd(input.value);
    input.value = "";
  };

  return (
    <form className="addPlayer" onSubmit={onSubmit}>
      <input
        type="text"
        className="addPlayer__input"
        ref={node => (input = node)}
      />
      <input type="submit" className="addPlayer__submit" value="Add" />
    </form>
  );
};

export default AddPlayer;
