type Position = 'forward' | 'up' | 'down'

type Move = {
  position: Position,
  value: number
}

function parsePosition(input: string): Move
{
  const values = input.split(' ');
  const value = values[1];
  const position = values[0];

  return {
    position: position as Position,
    value: Number.parseInt(value)
  }
}

type Coordinates = {
  depth: number,
  horizontalPosition: number
}

export function computeResult(inputs: string[]): number
{
  const coordinates = inputs.map(i => parsePosition(i)).reduce((previous: Coordinates, currentValue: Move): Coordinates => {
    if (currentValue.position === 'forward') {
      return {
        ...previous,
        horizontalPosition: previous.horizontalPosition + currentValue.value
      }
    }

    if (currentValue.position === 'down') {
      return {
        ...previous,
        depth: previous.depth + currentValue.value
      }
    }

    return {
      ...previous,
      depth: previous.depth - currentValue.value
    }
  }, { depth: 0, horizontalPosition: 0})


  return coordinates.depth * coordinates.horizontalPosition;
}

type CoordinatesWithAim = Coordinates & { aim: number; previousCalculus: CoordinatesWithAim[] }

function getNewResult(previous: CoordinatesWithAim, currentValue: Move): CoordinatesWithAim {
  if (currentValue.position === 'forward') {
    return {
      ...previous,
      depth: previous.depth + (previous.aim * currentValue.value),
      horizontalPosition: previous.horizontalPosition + currentValue.value
    }
  }

  if (currentValue.position === 'down') {
    return {
      ...previous,
      aim: previous.aim + currentValue.value,
    }
  }

  return {
    ...previous,
    aim: previous.aim - currentValue.value,
  }
}

export function computeResult2(inputs: string[]): number
{
  const init = { depth: 0, horizontalPosition: 0, aim: 0, previousCalculus: []}
  const coordinates = inputs.map(i => parsePosition(i)).reduce((previous: CoordinatesWithAim, currentValue: Move): CoordinatesWithAim => {
    const result = getNewResult(previous, currentValue);

    return {
      ...result,
      previousCalculus: [...previous.previousCalculus, { depth: result.depth, horizontalPosition: result.horizontalPosition, aim: result.aim, previousCalculus: []}]
    }
    
  }, { ...init, previousCalculus: [init]})

  return coordinates.depth * coordinates.horizontalPosition;
}
