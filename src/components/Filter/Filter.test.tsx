import { fireEvent, render } from "@testing-library/react";
import Filter from ".";

test("radio button exist in filter section", () => {
  const { getByLabelText } = render(<Filter />);

  const radio = getByLabelText("Dead") as HTMLInputElement;
  fireEvent.change(radio, { target: { value: "dead" } });
  expect(radio.value).toBe("dead");
});
