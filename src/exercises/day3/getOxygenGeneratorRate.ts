import { getRate } from "./getRate";
import { BitList } from "./types";

export function getOxygenGeneratorRate(inputs: BitList[]): number {
  return getRate(inputs, "oxygenGenerator");
}
