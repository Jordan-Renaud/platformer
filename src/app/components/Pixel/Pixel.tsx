import { iconData } from "../Data";
import { PixelId } from "../Types";

export default function Pixel({ id }: { id: PixelId }) {
  const Component = iconData.find((icon) => icon.iconId === id)?.component;
  return Component;
}
