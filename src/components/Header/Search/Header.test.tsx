import { fireEvent, render } from "@testing-library/react";

// Cmponent
import Search from ".";

const mockInputHandler = jest.fn();

describe("search", () => {
  test("should render search component", () => {
    const { getByPlaceholderText } = render(
      <Search inputHandler={mockInputHandler} />
    );
    const inputElement = getByPlaceholderText(/Search/i);
    expect(inputElement).toBeInTheDocument;
  });

  test("input handler", () => {
    const { getByPlaceholderText } = render(
      <Search inputHandler={mockInputHandler} />
    );
    const inputElement = getByPlaceholderText(/Search/i) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Rick Sanchez" } });
    expect(inputElement.value).toBe("Rick Sanchez");
  });
});
