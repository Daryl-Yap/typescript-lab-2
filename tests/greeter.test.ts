import { Greeter } from "../src/Greeter";

describe("greeter class", () => {
  test("return greeting", () => {
    const myGreeting: Greeter = new Greeter("Heyoo");
    expect(myGreeting.greet("Daryl")).toBe("Heyoo, Daryl");
  });
});
