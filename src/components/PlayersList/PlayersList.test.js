import PlayersList from "./PlayersList";
import React from "react";
import { shallow } from "enzyme";
import Player from "../Player/Player";

it("renders without crashing", () => {
  shallow(<PlayersList players={[]} />);
});

it("renders correct number of players", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    },
    {
      name: "Antoś",
      score: 0
    }
  ];
  const playerComponent = shallow(<PlayersList players={players} />);
  console.log(playerComponent.debug());
  const expectedPlayersNumber = playerComponent.find(Player).length; // not li as it is shallow, Player imported

  expect(expectedPlayersNumber).toEqual(2);
});

it("calls onScoreUpdate with correct values", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    },
    {
      name: "Antoś",
      score: 0
    }
  ];

  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(
    <PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />
  );

  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerScoreChange = firstPlayer.prop("onPlayerScoreChange");

  onPlayerScoreChange(12);
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 12); // first player, 12 points change
});

it("calls onPlayerRemove with correct values", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    },
    {
      name: "Antoś",
      score: 0
    }
  ];

  const mockedPlayerRemove = jest.fn();
  const playerComponent = shallow(
    <PlayersList players={players} onPlayerRemove={mockedPlayerRemove} />
  );
  const seconPlayer = playerComponent.find(Player).at(1);
  const onPlayerRemove = seconPlayer.prop("onPlayerRemove");
  onPlayerRemove();

  expect(mockedPlayerRemove).toBeCalledWith(1);
});
