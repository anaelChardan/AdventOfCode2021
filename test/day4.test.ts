import { winningPoint } from "../src/exercises/day4";
import { day4 } from "../src/exercisesInput/day4";

const example = {
  input: [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ],
  grids: [
    [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ],
    [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
  ],
};

describe("day4", () => {
  it("part1: computes the right result with an example", () => {
    const input = {
      input: [3, 5],
      grids: [
        [
          [3, 6],
          [5, 9],
        ],
      ],
    };

    const result = winningPoint(input).firstCompleteGrid;

    expect(result).toEqual(75);
  });
  it("part1: computes the right result with the example", () => {
    const result = winningPoint(example).firstCompleteGrid;

    expect(result).toEqual(4512);
  });
  it("part1: compute the right result with the input", () => {
    const result = winningPoint(day4).firstCompleteGrid;

    expect(result).toEqual(4662);
  })
  it("part2: compute the right result with the example", () => {
    const result = winningPoint(example).lastCompleteGrid;

    expect(result).toEqual(1924);
  })
  it("part2: compute the right result with the input", () => {
    const result = winningPoint(day4).lastCompleteGrid;

    expect(result).toEqual(12080);
  })
});
