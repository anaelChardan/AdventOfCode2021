import { Bit, InstancesByBit } from "./types";

export type MinMaxForBits =
  | {
      kind: "equals";
    }
  | {
      kind: "notEquals";
      min: Bit;
      max: Bit;
    };

export function getMinMaxForBits(input: InstancesByBit): MinMaxForBits {
  if (input["0"] === input["1"]) {
    return {
      kind: "equals",
    };
  }
  if (input["0"] > input["1"]) {
    return { kind: "notEquals", max: "0", min: "1" };
  }

  return { kind: "notEquals", min: "0", max: "1" };
}
