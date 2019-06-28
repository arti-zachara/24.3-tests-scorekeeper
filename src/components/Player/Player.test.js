import Player from "./Player";
import React from "react";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Player />);
});

it("renders correct name", () => {
  const playerNamePassed = "Ania";
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find(".player__name").text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it("renders correct score", () => {
  const playerScorePassed = 5;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(
    playerComponent.find(".player__score").text()
  );

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it("should call onPlayerScoreChange with 1 when plus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const plusButton = playerComponent.find(".player__button").first();

  plusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it("should call onPlayerScoreChange with -1 when minus button is clicked", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const minusButton = playerComponent.find(".player__button").at(1); // second one found

  minusButton.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it("should call onPlayerRemove when x button is clicked", () => {
  const mockedPlayerRemove = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerRemove={mockedPlayerRemove} />
  );

  const deleteButton = playerComponent.find(".player__button").at(2); // third button

  deleteButton.simulate("click");

  expect(mockedPlayerRemove).toBeCalled();
});
