import { computeNumberOfIncreases, computeNumberOfIncreasesPart2 } from "../src/exercises/day1";
import { day1 } from "../src/exercisesInput/day1";

describe("day1", () => {
  it("computes the right result", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const result = computeNumberOfIncreases(input)

    expect(result).toEqual(7);
  });

  it('computes the result', () => {
    const result = computeNumberOfIncreases(day1);

    expect(result).toEqual(1553);
  })

  it('computes the result part 2', () => {
    const result = computeNumberOfIncreasesPart2(day1);

    expect(result).toEqual(1597);
  })
});
