import { computeDay6, computePart2 } from "../src/exercises/day6";
import { day6 } from "../src/exercisesInput/day6";

describe("day6", () => {
  const example = [3,4,3,1,2];

  it("part1: solve the part 1 with an example", () => {
    const result = computeDay6(example, 18);
    expect(result).toEqual(26);
  })

  it("part1: solve the part 1 with an example 2", () => {
    const result = computeDay6(example, 80);
    expect(result).toEqual(5934);
  })

  it("part1: solve the part 1 with the input", () => {
    const result = computeDay6(day6, 80);
    expect(result).toEqual(371379);
  })

  it("part2: solve the part 2 with an example", () => {
    const result = computePart2(256, example);
    expect(result).toEqual(26984457539)
  })

  it("part2: solve the part 2 with the input", () => {
    const result = computePart2(256, day6);
    expect(result).toEqual(1674303997472)
  })
})
