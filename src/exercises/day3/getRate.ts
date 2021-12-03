import { bitsToDecimal } from "./bitsToDecimal";
import { computeCountsOfBitsForPositions } from "./computeCountsOfBitsForPositions";
import { getMinMaxForBits, MinMaxForBits } from "./getMinMaxForBits";
import { Bit, BitList } from "./types";

type Commonity = "most" | "least";

function getValueToTest(
  minMaxValueForPosition: MinMaxForBits,
  common: Commonity
): Bit {
  if (minMaxValueForPosition.kind === "equals") {
    if (common === "least") {
      return "0";
    }

    return "1";
  }

  return common === "most"
    ? minMaxValueForPosition.max
    : minMaxValueForPosition.min;
}

function filterList(
  inputs: BitList[],
  position: number,
  common: Commonity
): BitList[] {
  const countOfBitsForPositions = computeCountsOfBitsForPositions(inputs);

  const bitsForThisPosition = countOfBitsForPositions.get(position);
  if (!bitsForThisPosition) {
    throw new Error("NOT POSSIBLE");
  }

  const minMaxValueForPosition = getMinMaxForBits(bitsForThisPosition);
  const valueToTest = getValueToTest(minMaxValueForPosition, common);

  return inputs.filter((i) => i[position] === valueToTest);
}

export function getRate(
  inputs: BitList[],
  rate: "oxygenGenerator" | "co2Scrubber"
): number {
  const size = inputs[0].length;
  let currentInputs = inputs;
  for (let position = 0; position < size; position++) {
    currentInputs = filterList(
      currentInputs,
      position,
      rate === "oxygenGenerator" ? "most" : "least"
    );
    if (currentInputs.length === 1) {
      break;
    }
  }

  if (currentInputs.length !== 1) {
    throw new Error(
      `There are ${currentInputs.length} remaining inputs, that's not normal`
    );
  }

  return bitsToDecimal(currentInputs[0]);
}
