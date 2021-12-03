import { computeResult, computeResult2 } from "../src/exercises/day3";
import { getCo2ScrubberRate } from "../src/exercises/day3/getCo2ScrubberRate";
import { getOxygenGeneratorRate } from "../src/exercises/day3/getOxygenGeneratorRate";
import { toBitList } from "../src/exercises/day3/toBitList";
import { day3 } from "../src/exercisesInput/day3";


describe("day3", () => {
  const inputExample = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];

  it("part1: computes the right result with the example", () => {
    const result = computeResult(inputExample);

    expect(result).toEqual(198);
  });

  it("part1: computes the right result with the input", () => {
    const input = day3;

    const result = computeResult(input);

    expect(result).toEqual(3813416);
  })

  it("part2: computes the right oxygen rate result with the example", () => {
    const result = getOxygenGeneratorRate(inputExample.map(toBitList));

    expect(result).toEqual(23);
  })

  it("part2: computes the right co2 scrubber rate result with the example", () => {
    const result = getCo2ScrubberRate(inputExample.map(toBitList));

    expect(result).toEqual(10);
  })

  it("part1: computes the right result with the example", () => {
    const result = computeResult2(inputExample);

    expect(result).toEqual(230);
  })

  it("part1: computes the right result with the input", () => {
    const result = computeResult2(day3);

    expect(result).toEqual(2990784);
  })
});
