import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("Test <App/>", () => {
  render(<App />);

  it("Checking if h1 exist inside the component", () => {
    // expect(screen.getByRole("heading")).toHaveTextContent("UNIT TESTING");

    const header1 = screen.getByRole("heading", {
      name: "Hello 1",
    });
    expect(header1).toBeInTheDocument();

    expect(screen.getByText("Hello 2"));
  });

  it("check if span exist in the component", () => {
    expect(screen.getByTestId("span")).toBeInTheDocument();
  });
});
