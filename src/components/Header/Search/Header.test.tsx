import { render } from "@testing-library/react";
import Search from ".";

const mockInputHandler = jest.fn();

test("input element is rendered", () => {
  const { getByPlaceholderText } = render(
    <Search inputHandler={mockInputHandler} />
  );
  const inputElement = getByPlaceholderText("Search");
  expect(inputElement);
});
