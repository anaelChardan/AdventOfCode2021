function median(values: number[]){
  if(values.length ===0) throw new Error("No inputs");

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);
  
  if (values.length % 2)
    return values[half];
  
  return (values[half - 1] + values[half]) / 2.0;
}

function sum(values: number[]): number {
  return values.reduce((a, b) => a + b);
}

function mean(values: number[]): number {
  const sumValue = sum(values);

  return sumValue / values.length;
}

function distanceFromPosition(input: number[], position: number): number[]
{
  return input.map(i => Math.abs(i - position));
}

export function computeDay7(input: number[]): number {
  const medianValue = median(input);
  
  const distanceFromMedianValues = distanceFromPosition(input, medianValue);

  return sum(distanceFromMedianValues);
}

export function computeDay7Part2(input: number[]): number {
  const meanValue = mean(input);

  const distanceFromMeanCeil = distanceFromPosition(input, Math.ceil(meanValue)).map(d => (d*(d+1))/2);
  const distanceFromMeanFloor = distanceFromPosition(input, Math.floor(meanValue)).map(d => (d*(d+1))/2);

  return Math.min(sum(distanceFromMeanCeil), sum(distanceFromMeanFloor));
}
