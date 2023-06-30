import { PixelId } from "./Types";

interface PixelProps {
  id: PixelId;
}

export default function Pixel({ id }: PixelProps) {
  return <div>{id}</div>;
}
