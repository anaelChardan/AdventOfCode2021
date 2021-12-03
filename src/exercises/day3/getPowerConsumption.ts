import { bitsToDecimal } from "./bitsToDecimal";
import { computeCountsOfBitsForPositions } from "./computeCountsOfBitsForPositions";
import { getMinMaxForBits } from "./getMinMaxForBits";
import { BitList } from "./types";

export function getPowerConsumption(inputs: BitList[]): number {
  const result = computeCountsOfBitsForPositions(inputs);

  const gammaInBits: BitList = [];
  const epsilonInBits: BitList = [];
  for (const [_, value] of result) {
    const maxMin = getMinMaxForBits(value);
    if (maxMin.kind === "equals") {
      throw new Error("NOT HANDLED CASE FOR POWER CONSUMPTION");
    }

    gammaInBits.push(maxMin.max);
    epsilonInBits.push(maxMin.min);
  }

  const gamma = bitsToDecimal(gammaInBits);
  const epsilon = bitsToDecimal(epsilonInBits);

  return gamma * epsilon;
}
