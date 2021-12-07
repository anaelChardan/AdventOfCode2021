import { computeDay7, computeDay7Part2 } from "../src/exercises/day7";
import { day7 } from "../src/exercisesInput/day7";

describe("day7", () => {
  const example = [16,1,2,0,4,2,7,1,2,14];

  it("part1: solve the part 1 with an example", () => {
    const result = computeDay7(example);
    expect(result).toEqual(37);
  })

  it("part1: solve the part 1 with the input", () => {
    const result = computeDay7(day7);
    expect(result).toEqual(339321);
  })

  it("part2: solve the part 2 with an example", () => {
    const result = computeDay7Part2(example);
    expect(result).toEqual(168);
  })

  it("part2: solve the part 2 with the input", () => {
    const result = computeDay7Part2(day7);
    expect(result).toEqual(95476244);
  })
})
