import Pixel from "./Pixel";
import { PixelType } from "./Types";

export default function Grid({ plan }: { plan: PixelType[][] }) {
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
