type Coordinate = {
  line: number;
  column: number;
};

type Value = number;

type LineNumber = number;

type ColumnNumber = number;

export type Grid = {
  valueCoordinate: Map<Value, Coordinate>;
  lines: Map<LineNumber, { missingFilledValues: Map<Value, Value> }>;
  columns: Map<ColumnNumber, { missingFilledValues: Map<Value, Value> }>;
  unmarkedValuesSum: number
  name: string,
};

const hasNumber = (grid: Grid, value: number): boolean =>
  grid.valueCoordinate.has(value);

export const addValue = (
  value: number,
  grid: Grid
): { grid: Grid; isComplete: boolean } => {

  if (!hasNumber(grid, value)) {
    return { grid, isComplete: false };
  }

  const coordinates = grid.valueCoordinate.get(value);

  grid.lines.get(coordinates!.line)?.missingFilledValues.delete(value);
  grid.columns.get(coordinates!.column)?.missingFilledValues.delete(value);
  grid.unmarkedValuesSum = grid.unmarkedValuesSum - value;

  const isComplete =
    grid.lines.get(coordinates!.line)?.missingFilledValues.size === 0 ||
    grid.columns.get(coordinates!.column)?.missingFilledValues.size === 0;

  return {
    grid,
    isComplete,
  };
};

export const parseGrid = (input: number[][], name: string): Grid => {
  const grid: Grid = {
    valueCoordinate: new Map(),
    lines: new Map(),
    columns: new Map(),
    unmarkedValuesSum: 0,
    name
  };

  const lines = input.length;

  for (let line = 0; line < lines; line++) {
    const columns = input[line].length

    for (let column = 0; column < columns; column++) {
      const value = input[line][column];
      grid.valueCoordinate.set(value, { column, line });

      const missingCoordinatesForLine = grid.lines.get(line) ?? {
        missingFilledValues: new Map<Value, Value>(),
      };
      missingCoordinatesForLine.missingFilledValues.set(value, value);

      const missingCoordinatesForColumn = grid.columns.get(column) ?? {
        missingFilledValues: new Map<Value, Value>(),
      };
      missingCoordinatesForColumn.missingFilledValues.set(value, value);

      grid.lines.set(line, missingCoordinatesForLine);
      grid.columns.set(column, missingCoordinatesForColumn);
      grid.unmarkedValuesSum = grid.unmarkedValuesSum + value
    }
  }

  return grid;
};
