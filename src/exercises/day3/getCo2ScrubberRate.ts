import { getRate } from "./getRate";
import { BitList } from "./types";

export function getCo2ScrubberRate(inputs: BitList[]): number {
  return getRate(inputs, "co2Scrubber");
}
