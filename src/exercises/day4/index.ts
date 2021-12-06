import { addValue, Grid, parseGrid } from "./grid";

type GridInput = number[][]

type ProblemInput = {
  input: number[],
  grids: GridInput[]
}

type Problem = {
  input: number[],
  grids: Grid[]
}

export function parseSystem(input: ProblemInput): Problem {
  const problemGrids = input.grids.map((value, index) => parseGrid(value, `grid#${index}`));

  return {
    input: input.input,
    grids: problemGrids
  }
}

export function winningPoint(input: ProblemInput): { firstCompleteGrid: number, lastCompleteGrid: number } {
  const parsedProblem = parseSystem(input);

  const grids = parsedProblem.grids;

  const incompleteGrids = new Map<string, string>(parsedProblem.grids.map(g => [g.name, g.name]));

  let firstCompleteGrid: { name: string, value: number } | null = null;
  let lastCompleteGrid: { name: string, value: number} = { name: 'grid#0', value: 0 };

  for(const value of input.input) {
    for(const grid of grids) {
      const result = addValue(value, grid);

      if (result.isComplete) {
        const score = value * result.grid.unmarkedValuesSum;

        if (firstCompleteGrid === null) {
          firstCompleteGrid = { name: grid.name, value: score}
        }

        if (incompleteGrids.has(grid.name)) {
          lastCompleteGrid.name = grid.name;
          lastCompleteGrid.value = score;
          incompleteGrids.delete(grid.name);

          if (incompleteGrids.size === 0) {
            return { firstCompleteGrid: firstCompleteGrid?.value!, lastCompleteGrid: lastCompleteGrid.value };
          }
        }
      }
    }
  }

  return { firstCompleteGrid: firstCompleteGrid?.value!, lastCompleteGrid: lastCompleteGrid.value };
}
