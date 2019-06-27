import React, { Component } from "react";
import PlayersList from "./components/PlayersList/PlayersList";
import "./App.css";
import AddPlayer from "./components/AddPlayer/AddPlayer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Kunegunda",
          score: 5
        },
        {
          name: "Antoś",
          score: 0
        }
      ]
    };
  }
  // with arrow function as @babel/plugin-proposal-class-properties is installed
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };

  onPlayerRemove = playerId => {
    this.setState({
      players: this.state.players.filter((elem, i) => {
        if (i !== playerId) return elem;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
