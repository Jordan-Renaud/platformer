import {
  Coin,
  DrippingLava,
  Empty,
  Lava,
  MovingLava,
  Wall,
} from "./Pixel/PixelOptions";
import Player from "./Player";

export type PixelId = "." | "#" | "=" | "o" | "+" | "@" | "|";
export type IconColour = "transparent" | "red" | "white" | "yellow" | "black";

export interface IconType {
  iconId: PixelId;
  iconColour: IconColour;
  iconDescription: string;
  component: JSX.Element;
}

export interface PixelType {
  id: PixelId;
  location: { xCoord: number; yCoord: number };
}

export const iconData: IconType[] = [
  {
    iconId: ".",
    iconColour: "transparent",
    iconDescription: "empty",
    component: <Empty />,
  },
  {
    iconId: "=",
    iconColour: "red",
    iconDescription: "moving lava",
    component: <MovingLava />,
  },
  {
    iconId: "#",
    iconColour: "white",
    iconDescription: "wall",
    component: <Wall />,
  },
  {
    iconId: "o",
    iconColour: "yellow",
    iconDescription: "coin",
    component: <Coin />,
  },
  {
    iconId: "@",
    iconColour: "black",
    iconDescription: "player",
    component: <Player />,
  },
  {
    iconId: "|",
    iconColour: "red",
    iconDescription: "dripping lava",
    component: <DrippingLava />,
  },
  {
    iconId: "+",
    iconColour: "red",
    iconDescription: "lava",
    component: <Lava />,
  },
];
