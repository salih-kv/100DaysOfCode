import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Test <App/>", () => {
  userEvent.setup();
  render(<App />);
  it("User Interaction", async () => {
    const beforeIncrement = screen.getByTestId("span");
    expect(beforeIncrement).toHaveTextContent(0);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const afterIncrement = screen.getByTestId("span");
    expect(afterIncrement).toHaveTextContent(1);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "10");
    expect(input).toHaveValue();
  });
});
