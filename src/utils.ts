export function toWindows<T>(inputArray: T[], size: number): T[][] { 
  return Array.from(
    {length: inputArray.length - (size - 1)}, //get the appropriate length
    (_, index) => inputArray.slice(index, index+size) //create the windows
  )
}
