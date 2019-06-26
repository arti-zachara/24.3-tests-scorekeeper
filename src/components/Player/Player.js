import React from "react";
import "./Player.css";

const Player = props => (
  <li className="player">
    <span className="player__name">{props.name}</span>
    <span className="player__score">{props.score}</span>
    <span
      className="player__button"
      onClick={() => props.onPlayerScoreChange(1)}
    >
      +
    </span>
    <span
      className="player__button"
      onClick={() => props.onPlayerScoreChange(-1)}
    >
      -
    </span>
  </li>
);

export default Player;
