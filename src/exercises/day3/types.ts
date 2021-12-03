type Position = number;
export type Bit = "0" | "1";
export type BitList = Bit[];
export type InstancesByBit = { [key in Bit]: number };
export type CountOfBitsForPositions = Map<Position, InstancesByBit>;
