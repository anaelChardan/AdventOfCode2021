type Coordinate = { x: number, y: number }
type Vector = { from: Coordinate, to: Coordinate }

type Input = Vector[]



function isHorizontalOrVertical(vector: Vector): boolean
{
  return vector.from.x === vector.to.x || vector.from.y === vector.to.y;
}

export function is45Degrees(vector: Vector): boolean
{
  return Math.abs(vector.from.x - vector.to.x) === Math.abs(vector.from.y - vector.to.y);
}

function getDirection(vector: Vector): 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' {
  const topBottom = vector.from.y < vector.to.y ? 'bottom' : 'top';
  const leftRight = vector.from.x < vector.to.x ? 'right' : 'left';
  
  return `${topBottom}-${leftRight}`;
}

export function getCoordinateForVector(vector: Vector): Coordinate[]
{
  if (!isHorizontalOrVertical(vector) && !is45Degrees(vector)) {
    throw new Error("IMPOSSIBLE");
  }

  const coordinates = [];
  if(is45Degrees(vector)) {
    const direction = getDirection(vector);
    console.log(direction);
    let stepX = 0;
    let stepY = 0;
    if (direction === 'bottom-right') {
      stepX = 1;
      stepY = 1;
    } else if (direction === 'bottom-left') {
      stepX = -1;
      stepY = 1
    } else if (direction === 'top-right') {
      stepX = 1;
      stepY = -1;
    } else if (direction === 'top-left') {
      stepX = -1;
      stepY = -1;
    }

    const length = Math.abs(vector.from.x - vector.to.x);

    coordinates.push(vector.from);
    let x = vector.from.x;
    let y = vector.from.y;
    
    for(let i = 0; i < length; i++) {
      x += stepX;
      y += stepY;
      coordinates.push({ x, y })
    }

    return coordinates;
  }

  const startingX = Math.min(vector.from.x, vector.to.x);
  const startingY = Math.min(vector.from.y, vector.to.y);

  const maxX = Math.max(vector.from.x, vector.to.x);
  const maxY = Math.max(vector.from.y, vector.to.y);

  for(let x = startingX; x <= maxX; x++) {
    for(let y = startingY; y <= maxY; y++) {
      coordinates.push({ x, y })
    }
  }

  return coordinates;
}

function coordinateToString(coordinate: Coordinate): string {
  return `${coordinate.x}-${coordinate.y}`
}


function initArray(input: Input): number[][]
{
  const maxX = Math.max(...input.map(c => Math.max(c.from.x, c.to.x)));
  const maxY = Math.max(...input.map(c => Math.max(c.from.y, c.to.y)));

  let grid: number[][] = []
  for(let x = 0; x <= maxX; x++) {
    for(let y = 0; y <= maxY; y++) {
      if (!grid[y]) {
        grid[y] = [];
      }

      grid[y][x] = 0;
    }
  }

  return grid;
}

function print(input: number[][]): void
{
  let result = ``;

  const lines = input.length;
  const columns = input[0].length;
  for(let x = 0; x < lines; x++) {
    for(let y = 0; y < columns; y++) {
      result = result.concat(input[x][y] === 0 ? `. ` : `${input[x][y]} `)
    }
    result = result.concat("\n");
  }

  console.log(result);
}

export function computeProblem(input: Input, include45Diagonal: boolean = false): number
{
  let initialMap = initArray(input);

  print(initialMap);

  const coordinatesTouchedValues: Map<string, number> = new Map();
  let pointTouchedMoreThanOnce: Map<string, string> = new Map();

  const vectors = input.filter(i => isHorizontalOrVertical(i) || (include45Diagonal ? is45Degrees(i) : false));

  for(const vector of vectors)
  {
    const coordinateForVector = getCoordinateForVector(vector);

    for(const coordinateTouched of coordinateForVector) {
      const coordinate = coordinateToString(coordinateTouched);
      if (coordinatesTouchedValues.has(coordinate) && !pointTouchedMoreThanOnce.has(coordinate)) {
        pointTouchedMoreThanOnce.set(coordinate, coordinate)
      }
      coordinatesTouchedValues.set(coordinate, (coordinatesTouchedValues.get(coordinate) ?? 0) + 1);
    
      initialMap[coordinateTouched.y][coordinateTouched.x]++;
    }
  }
  
  
  print(initialMap);


  return pointTouchedMoreThanOnce.size;
}
