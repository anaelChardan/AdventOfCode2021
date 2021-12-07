
function newAge(fishInternalTimer: number): { fishTimer: number, fishes: number[] } {
  const newFishInternalTimer = fishInternalTimer - 1;
  if(newFishInternalTimer >= 0) {
    return { fishTimer: newFishInternalTimer, fishes: [] }
  }

  return { fishTimer: 6, fishes: [8] }
}

export function computePart2(days: number, initialState: number[]): number {
  const lanternfishsByAge = Array(9).fill(0);

  initialState.forEach((lanterfishAge) => {
    lanternfishsByAge[lanterfishAge]++;
  });

  for (let i = 0; i < days; i++) {
    const numberOfLanterfishThatWillDie = lanternfishsByAge[0];

    lanternfishsByAge.forEach((_, index) => {
      lanternfishsByAge[index] = lanternfishsByAge[index + 1];
    });

    lanternfishsByAge[6] += numberOfLanterfishThatWillDie;
    lanternfishsByAge[8] = numberOfLanterfishThatWillDie;
  }

  return lanternfishsByAge.reduce((a, b) => a + b);
}


export function computeDay6(fishesInput: number[], numberOfDays: number = 1): number {

  let fishes = fishesInput;

  for(let day = 0; day < numberOfDays; day++) {
    let fishesForDays: number[] = [];
    let newFishes: number[] = [];

    for(const fish of fishes) {
      const newAgeComputed = newAge(fish);
      fishesForDays.push(newAgeComputed.fishTimer);
      newFishes.push(...newAgeComputed.fishes);
    }

    fishes = [...fishesForDays, ...newFishes]
  }

  return fishes.length;
}
