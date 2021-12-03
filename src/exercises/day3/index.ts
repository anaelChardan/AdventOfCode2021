import { getCo2ScrubberRate } from "./getCo2ScrubberRate";
import { getOxygenGeneratorRate } from "./getOxygenGeneratorRate";
import { getPowerConsumption } from "./getPowerConsumption";
import { toBitList } from "./toBitList";


export function computeResult(inputs: string[]): number {
  return getPowerConsumption(inputs.map(toBitList));
}

export function computeResult2(inputs: string[]): number {
  return getOxygenGeneratorRate(inputs.map(toBitList)) * getCo2ScrubberRate(inputs.map(toBitList));
}

