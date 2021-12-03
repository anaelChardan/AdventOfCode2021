import { BitList, CountOfBitsForPositions } from "./types";

export function computeCountsOfBitsForPositions(
  inputs: BitList[]
): CountOfBitsForPositions {
  const result = new Map();
  const init = { "0": 0, "1": 0 };
  for (const bits of inputs) {
    let bitRange = 0;
    for (const bit of bits) {
      const previous = result.get(bitRange) ?? init;
      const value = { "0": bit === "0" ? 1 : 0, "1": bit === "1" ? 1 : 0 };
      result.set(bitRange, {
        "0": previous["0"] + value["0"],
        "1": previous["1"] + value["1"],
      });
      bitRange++;
    }
  }

  return result;
}
