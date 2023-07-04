"use client";
import { useMemo, useState } from "react";
import Grid from "./components/Grid";
import { PlanContext } from "./components/PlanContext";
import { simplePlanToGridPlan } from "./components/Utils";
import { simpleLevelPlan } from "./components/Data";

const gridPlan = simplePlanToGridPlan(simpleLevelPlan);

export default function Home() {
  const [plan, updatePlan] = useState(gridPlan);
  const planProviderValue = useMemo(() => ({ plan, updatePlan }), [plan]);

  return (
    <PlanContext.Provider value={planProviderValue}>
      <main className="home">
        <h1>Platformer</h1>
        <Grid />
      </main>
    </PlanContext.Provider>
  );
}
