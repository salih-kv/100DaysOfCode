import { describe, it, expect } from "vitest";
import {
  USER_API,
  add,
  fetchUser,
  isAuthenticated,
  languages,
  reverseString,
  userDetails,
} from "./helper";

describe("test cases for add function", () => {
  it("returns 1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });

  it("check for strings", () => {
    expect(add("1", "1")).toBe(0);
  });

  it("check for arrays", () => {
    expect(add(["1"], ["1"])).toBe(0);
  });
});

describe("reverseString() test cases", () => {
  it("check if it is defined", () => {
    expect(reverseString).toBeDefined();
  });

  it("check if string reverses properly", () => {
    expect(reverseString("bat")).toBe("tab");
  });
});

describe("Test USER_API URL", () => {
  it("check if URL is correct", () => {
    expect(USER_API).toBe("https://api.com/user");
  });
});

describe("languages:", () => {
  it("Check if languages has 3 items", () => {
    expect(languages).toEqual(["JS", "CSS", "HTML"]);
  });
});

describe("User Details Object", () => {
  it("Check if Object has 2 properties", () => {
    expect(userDetails).toHaveProperty("name");
    expect(userDetails).toHaveProperty("age");
  });
});

describe("API", () => {
  it("check if API returns data", async () => {
    const data = await fetchUser();
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("username");
    expect(data).toHaveProperty("email");
  }, 10000); // timeout if needed - not recommended
  // alternative - Mock Service Worker
});

describe("isAuthenticated", () => {
  it("if user is logged in?", () => {
    expect(isAuthenticated(true)).toBeTruthy();
  });

  it("if user is not logged in?", () => {
    expect(() => isAuthenticated(false)).toThrow();
  });
});
