import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it("renders without crashing", () => {
  shallow(<App />);
});

it("should update player score", () => {
  const appComponent = shallow(<App />);
  const players = [{ name: "Arti", score: 13 }];
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop("onScoreUpdate");
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().players; // or state("players")

  expect(playersAfterUpdate[0].score).toEqual(13 + 5);
});

it("should add a player with a proper name", () => {
  const appComponent = shallow(<App />);
  const players = [{ name: "Arti", score: 13 }];
  appComponent.setState({ players });

  const onPlayerAdd = appComponent.find(AddPlayer).prop("onPlayerAdd");
  onPlayerAdd("Ania");

  const newPlayers = appComponent.state("players");
  expect(newPlayers.length).toEqual(2);
  expect(newPlayers[1].name).toEqual("Ania");
  expect(newPlayers[1].score).toEqual(0);
});
