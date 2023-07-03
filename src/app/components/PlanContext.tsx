import { createContext } from "react";
import { PixelId, PixelType } from "./Types";

const emptyLevelPlan = `
......................
......................
......................
......................
......................
......................
......................
......................
......................`;

export function simplePlanToGridPlan(plan: string) {
  const pixelFactory = (pixelId: PixelId, xCoord: number, yCoord: number) => ({
    id: pixelId,
    location: { xCoord, yCoord },
  });

  const rows = plan.split("\n");

  const pixels: PixelType[][] = rows.map((row, yCoord) => {
    const pixelIds = row.split("") as PixelId[];

    return pixelIds.map((pixelId, xCoord) =>
      pixelFactory(pixelId, xCoord, yCoord)
    );
  });

  return pixels;
}

export const PlanContext = createContext(simplePlanToGridPlan(emptyLevelPlan));
