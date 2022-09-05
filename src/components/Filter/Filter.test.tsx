import { render } from "@testing-library/react";

// Component
import Filter from ".";

describe("filter", () => {
  test("should render specific radio button in filter", () => {
    const { getByLabelText } = render(<Filter />);

    const radio = getByLabelText("Alive") as HTMLInputElement;
    expect(radio);
  });

  test("should render all radio buttons in filter", () => {
    const { getAllByRole } = render(<Filter />);

    const radioButtons = getAllByRole("radio") as HTMLInputElement[];
    expect(radioButtons.length).toBe(4);
  });
});
