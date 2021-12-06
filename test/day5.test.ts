import {
  computeProblem,
  getCoordinateForVector,
  is45Degrees,
} from "../src/exercises/day5";
import { day5 } from "../src/exercisesInput/day5";

const example = [
  { from: { x: 0, y: 9 }, to: { x: 5, y: 9 } },
  { from: { x: 8, y: 0 }, to: { x: 0, y: 8 } },
  { from: { x: 9, y: 4 }, to: { x: 3, y: 4 } },
  { from: { x: 2, y: 2 }, to: { x: 2, y: 1 } },
  { from: { x: 7, y: 0 }, to: { x: 7, y: 4 } },
  { from: { x: 6, y: 4 }, to: { x: 2, y: 0 } },
  { from: { x: 0, y: 9 }, to: { x: 2, y: 9 } },
  { from: { x: 3, y: 4 }, to: { x: 1, y: 4 } },
  { from: { x: 0, y: 0 }, to: { x: 8, y: 8 } },
  { from: { x: 5, y: 5 }, to: { x: 8, y: 2 } },
];

describe("day5", () => {
  // it("part1: computes the right result with an example", () => {
  //   const result = computeProblem(example)

  //   expect(result).toEqual(5);
  // });
  // it("part1: computes the right result with the input", () => {
  //   const result = computeProblem(day5)

  //   expect(result).toEqual(6841);
  // });
  // it("part2: says if a vector is at 45 degrees", () => {
  //   const result = is45Degrees({ from: { x: 8, y: 0 }, to: { x: 0, y: 8 } })

  //   expect(result).toEqual(true);
  // })
  it("part2: computes the right coordinates for vector", () => {
    const vectors = [
      {
        vector: { from: { x: 0, y: 9 }, to: { x: 5, y: 9 } },
        result: [
          { x: 0, y: 9 },
          { x: 1, y: 9 },
          { x: 2, y: 9 },
          { x: 3, y: 9 },
          { x: 4, y: 9 },
          { x: 5, y: 9 },
        ],
      },
      {
        vector: { from: { x: 8, y: 0 }, to: { x: 0, y: 8 } },
        result: [
          { x: 8, y: 0 },
          { x: 7, y: 1 },
          { x: 6, y: 2 },
          { x: 5, y: 3 },
          { x: 4, y: 4 },
          { x: 3, y: 5 },
          { x: 2, y: 6 },
          { x: 1, y: 7 },
          { x: 0, y: 8 },
        ],
      },
      {
        vector: { from: { x: 9, y: 4 }, to: { x: 3, y: 4 } },
        result: [
          { x: 3, y: 4 },
          { x: 4, y: 4 },
          { x: 5, y: 4 },
          { x: 6, y: 4 },
          { x: 7, y: 4 },
          { x: 8, y: 4 },
          { x: 9, y: 4 },
        ],
      },
      {
        vector: { from: { x: 2, y: 2 }, to: { x: 2, y: 1 } },
        result: [
          { x: 2, y: 1 },
          { x: 2, y: 2 },
        ],
      },
      {
        vector: { from: { x: 7, y: 0 }, to: { x: 7, y: 4 } },
        result: [
          { x: 7, y: 0 },
          { x: 7, y: 1 },
          { x: 7, y: 2 },
          { x: 7, y: 3 },
          { x: 7, y: 4 },
        ],
      },
      {
        vector: { from: { x: 6, y: 4 }, to: { x: 2, y: 0 } },
        result: [
          { x: 6, y: 4 },
          { x: 5, y: 3 },
          { x: 4, y: 2 },
          { x: 3, y: 1 },
          { x: 2, y: 0 },
        ],
      },
      {
        vector: { from: { x: 0, y: 9 }, to: { x: 2, y: 9 } },
        result: [
          { x: 0, y: 9 },
          { x: 1, y: 9 },
          { x: 2, y: 9 },
        ],
      },
      {
        vector: { from: { x: 3, y: 4 }, to: { x: 1, y: 4 } },
        result: [
          { x: 1, y: 4 },
          { x: 2, y: 4 },
          { x: 3, y: 4 },
        ],
      },
      {
        vector: { from: { x: 0, y: 0 }, to: { x: 8, y: 8 } },
        result: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
          { x: 6, y: 6 },
          { x: 7, y: 7 },
          { x: 8, y: 8 },
        ],
      },
      { vector: { from: { x: 5, y: 5 }, to: { x: 8, y: 2 } }, result: [
        { x: 5, y: 5 },
        { x: 6, y: 4 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },

      ] },
    ];

    for (const vector of vectors) {
      const result = getCoordinateForVector(vector.vector);

      expect(result).toMatchObject(vector.result);
    }
  });
  it("part2: computes the right result with an example", () => {
    const result = computeProblem(example, true);

    expect(result).toEqual(12);
  });
  it("part2: computes the right result with the input", () => {
    const result = computeProblem(day5, true);

    expect(result).toEqual(12);
  });
});
