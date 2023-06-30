export type PixelId = "." | "#" | "=" | "o" | "+" | "@";
export type RowSplit = "\n";
export interface PixelType {
  id: PixelId;
  location: { xCoord: number; yCoord: number };
}
