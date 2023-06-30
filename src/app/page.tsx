import Grid from "./components/Grid";
import { PixelId, PixelType } from "./components/Types";

const simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

function simplePlanToGridPlan(plan: string) {
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

export default function Home() {
  return (
    <main>
      <h1>Platformer</h1>
      <Grid plan={simplePlanToGridPlan(simpleLevelPlan)} />
    </main>
  );
}
