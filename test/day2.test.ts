import { computeResult, computeResult2 } from "../src/exercises/day2";
import { day2 } from "../src/exercisesInput/day2";

describe("day2", () => {
  it("part1: computes the right result with the example", () => {
    const input = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];

    const result = computeResult(input);

    expect(result).toEqual(150);
  });

  it("part1: computes the right result with the input", () => {
    const input = day2;

    const result = computeResult(input);

    expect(result).toEqual(1714950);
  })

  it("part2: computes the right result with the example", () => {
    const input = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];

    const result = computeResult2(input);

    expect(result).toEqual(900);
  })

  it("part1: computes the right result with the input", () => {
    const input = day2;

    const result = computeResult2(input);

    expect(result).toEqual(1281977850);
  })
});
