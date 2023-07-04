import { IconType } from "./Types";
import {
  Coin,
  DrippingLava,
  Empty,
  Lava,
  MovingLava,
  Wall,
} from "./Pixel/PixelOptions";
import PlayerPixel from "./Player/PlayerPixel";

export const emptyLevelPlan = `
......................
......................
......................
......................
......................
......................
......................
......................
......................`;

export const simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

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
    component: <PlayerPixel />,
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

const plan = [
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 2,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 12,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 14,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 19,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 0,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 0,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 1,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 2,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 12,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 14,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 1,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 1,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 1,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 2,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 2,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 12,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 14,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 2,
      },
    },
    {
      id: "=",
      location: {
        xCoord: 17,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 2,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 2,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 2,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 3,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 2,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 3,
      },
    },
    {
      id: "o",
      location: {
        xCoord: 12,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 3,
      },
    },
    {
      id: "o",
      location: {
        xCoord: 14,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 3,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 3,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 3,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 2,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 4,
      },
    },
    {
      id: "@",
      location: {
        xCoord: 4,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 11,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 12,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 13,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 14,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 15,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 4,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 4,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 4,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 2,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 3,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 4,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 5,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 6,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 12,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 14,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 5,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 5,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 5,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 2,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 6,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 6,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 7,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 8,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 9,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 10,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 11,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 12,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 13,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 14,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 15,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 16,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 17,
        yCoord: 6,
      },
    },
    {
      id: "+",
      location: {
        xCoord: 18,
        yCoord: 6,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 6,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 6,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 2,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 6,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 7,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 8,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 9,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 10,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 11,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 12,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 13,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 14,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 15,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 16,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 17,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 18,
        yCoord: 7,
      },
    },
    {
      id: "#",
      location: {
        xCoord: 19,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 7,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 7,
      },
    },
  ],
  [
    {
      id: ".",
      location: {
        xCoord: 0,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 1,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 2,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 3,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 4,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 5,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 6,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 7,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 8,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 9,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 10,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 11,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 12,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 13,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 14,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 15,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 16,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 17,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 18,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 19,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 20,
        yCoord: 8,
      },
    },
    {
      id: ".",
      location: {
        xCoord: 21,
        yCoord: 8,
      },
    },
  ],
];
