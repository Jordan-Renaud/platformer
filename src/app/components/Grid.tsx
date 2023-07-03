import { useContext } from "react";
import Pixel from "./Pixel/Pixel";
import { PlanContext } from "./PlanContext";

export default function Grid() {
  const plan = useContext(PlanContext);
  return (
    <div className="grid">
      {plan.map((row) =>
        row.map(({ id, location }) => (
          <Pixel id={id} key={`${location.xCoord}, ${location.yCoord}`} />
        ))
      )}
    </div>
  );
}
