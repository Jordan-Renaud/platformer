import { PixelId, iconData } from "../Types";

export default function Pixel({ id }: { id: PixelId }) {
  const Component = iconData.find((icon) => icon.iconId === id)?.component;
  return Component;
}
