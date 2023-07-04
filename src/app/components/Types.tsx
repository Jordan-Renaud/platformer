import React from "react";

export type PixelId = "." | "#" | "=" | "o" | "+" | "@" | "|";

export interface PixelType {
  id: PixelId;
  location: {
    xCoord: number;
    yCoord: number;
  };
}
export type LocationType = PixelType["location"];

export type IconColour = "transparent" | "red" | "white" | "yellow" | "black";
export interface IconType {
  iconId: PixelId;
  iconColour: IconColour;
  iconDescription: string;
  component: React.JSX.Element;
}
