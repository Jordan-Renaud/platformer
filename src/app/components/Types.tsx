export type PixelId = "." | "#" | "=" | "o" | "+" | "@" | "|";
export type IconColour = "transparent" | "red" | "white" | "yellow" | "black";

export interface IconType {
  iconId: PixelId;
  iconColour: IconColour;
  iconDescription: string;
}

export interface PixelType {
  id: PixelId;
  location: { xCoord: number; yCoord: number };
}
