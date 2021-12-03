import { toWindows } from "../utils";

export function computeNumberOfIncreases(inputs: number[]): number {
  let decreases = 0;
  let increases = 0;
  let equals = 0;
  let lastValue = inputs[0];
  const [_, ...tail] = inputs;

  for(const input of tail) {
    if (input > lastValue) {
      increases++
    } else if (input === lastValue) {
      equals++;
    } else if (input < lastValue) {
      decreases++;
    }

    lastValue = input;
  }

  return increases;
}

function sum(inputs: number[]): number
{
  let sum = 0;
  for(const input of inputs){
    sum += input
  }
  return sum;
}

export function computeNumberOfIncreasesPart2(inputs: number[]): number
{
  const windows = toWindows(inputs, 3);
  const windowSum = windows.map(e => sum(e));

  return computeNumberOfIncreases(windowSum);
}
