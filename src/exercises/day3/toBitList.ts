import { Bit, BitList } from "./types";

export function toBitList(bits: string): BitList
{
  const list: BitList = [];

  for(const bit of bits) {
    if ('0' !== bit && '1' !== bit) {
      throw new Error(`THIS IS NOT A BIT: ${bit}`)
    }

    list.push(bit as Bit)
  }

  return list
}
