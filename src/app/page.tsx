"use client";
import Grid from "./components/Grid";
import { PlanContext, simplePlanToGridPlan } from "./components/PlanContext";

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

export default function Home() {
  return (
    <PlanContext.Provider value={simplePlanToGridPlan(simpleLevelPlan)}>
      <main className="home">
        <h1>Platformer</h1>
        <Grid />
      </main>
    </PlanContext.Provider>
  );
}
