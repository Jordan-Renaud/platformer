import { PixelId, PixelType } from "./Types";

export function getPlayerLocation(plan: PixelType[][]) {
  const pixel = plan.flat().find((pixel) => pixel.id === "@");

  if (pixel) return pixel.location;
  else throw new Error(`can't find player pixel`);
}

export function getPixelFromLocation(
  plan: PixelType[][],
  location: PixelType["location"]
) {
  const pixel = plan
    .flat()
    .find(
      (pixel) =>
        pixel.location.xCoord === location.xCoord &&
        pixel.location.yCoord === location.yCoord
    );

  if (pixel) return pixel;
  else
    throw new Error(
      `can't find pixel at location ${location.xCoord}, ${location.yCoord}`
    );
}

export function simplePlanToGridPlan(plan: string) {
  const pixelFactory = (pixelId: PixelId, xCoord: number, yCoord: number) => ({
    id: pixelId,
    location: { xCoord, yCoord },
  });

  const rows = plan.split("\n").filter((row) => row.length > 0);

  const pixels: PixelType[][] = rows.map((row, yCoord) => {
    const pixelIds = row.split("") as PixelId[];

    return pixelIds.map((pixelId, xCoord) =>
      pixelFactory(pixelId, xCoord, yCoord)
    );
  });

  return pixels;
}

export function gridPlanToSimplePlan(plan: PixelType[][]) {
  const simplePlan = plan
    .map((row) => row.map((pixel) => pixel.id).join(""))
    .join("\n");
  //adds the first newline character
  return "\n" + simplePlan;
}

export function iterateThroughPlan(
  plan: PixelType[][],
  condition: boolean,
  callback: () => void
) {
  plan.forEach((row, yCoord) => {
    row.forEach((pixel, xCoord) => {
      if (condition) callback();
    });
  });
}
