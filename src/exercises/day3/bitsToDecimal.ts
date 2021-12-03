import { BitList } from "./types";

export function bitsToDecimal(input: BitList): number {
  return parseInt(input.join(''), 2);
}
