import Player from "../Player";
import { IconType, PixelId } from "../Types";
import {
  Coin,
  DrippingLava,
  Empty,
  Lava,
  MovingLava,
  Wall,
} from "./PixelOptions";

const iconData: IconType[] = [
  { iconId: ".", iconColour: "transparent", iconDescription: "empty" },
  { iconId: "=", iconColour: "red", iconDescription: "moving lava" },
  { iconId: "#", iconColour: "white", iconDescription: "wall" },
  { iconId: "o", iconColour: "yellow", iconDescription: "coin" },
  { iconId: "@", iconColour: "black", iconDescription: "player" },
  { iconId: "|", iconColour: "red", iconDescription: "dripping lava" },
  { iconId: "+", iconColour: "red", iconDescription: "lava" },
];

export default function Pixel({ id }: { id: PixelId }) {
  const isEmpty = id === ".";
  const isMovingLava = id === "=";
  const isWall = id === "#";
  const isCoin = id === "o";
  const isPlayer = id === "@";
  const isDrippingLava = id === "|";
  const isLava = id === "+";

  return (
    <>
      {isEmpty && <Empty />}
      {isMovingLava && <MovingLava />}
      {isWall && <Wall />}
      {isCoin && <Coin />}
      {isPlayer && <Player />}
      {isDrippingLava && <DrippingLava />}
      {isLava && <Lava />}
    </>
  );
}
