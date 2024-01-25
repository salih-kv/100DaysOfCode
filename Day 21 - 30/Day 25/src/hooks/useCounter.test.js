/* eslint-disable no-undef */
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("Render default count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("Render initial count", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it("Increment", () => {
    // Arrange, Act, Assert
    const { result } = renderHook(useCounter);
    act(() => result.current.onIncrement());
    expect(result.current.count).toBe(1);
  });

  it("Decrement", () => {
    // Arrange
    const { result } = renderHook(useCounter);

    // Act
    act(() => result.current.onDecrement());

    // Assert
    expect(result.current.count).toBe(-1);
  });
});
