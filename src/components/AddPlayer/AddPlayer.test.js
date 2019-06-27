import React from "react";
import AddPlayer from "./AddPlayer";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<AddPlayer />);
});

it("calls onAddPlayer with a proper name", () => {
  const onPlayerAdd = jest.fn();
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  const nameInput = addPlayerComponent
    .find("input")
    .first()
    .getDOMNode(); //getDOMNode only wirks with mount

  nameInput.value = "Ania";

  const form = addPlayerComponent.find("form");
  form.simulate("submit");

  expect(onPlayerAdd).toBeCalledWith("Ania");
});
