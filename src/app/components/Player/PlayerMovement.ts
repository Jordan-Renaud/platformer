import { Dispatch, SetStateAction } from "react";
import { getPixelFromLocation, getPlayerLocation } from "../Utils";
import { LocationType, PixelType } from "../Types";

export function getMoveCallback(keyPressed: string) {
  const direction = keyPressed.replace("Arrow", "").toLowerCase();

  if (direction === "up") {
    return ({ xCoord, yCoord }: LocationType) => ({
      xCoord,
      yCoord: yCoord - 1,
    });
  }

  if (direction === "down") {
    return ({ xCoord, yCoord }: LocationType) => ({
      xCoord,
      yCoord: yCoord + 1,
    });
  }

  if (direction === "left") {
    return ({ xCoord, yCoord }: LocationType) => ({
      xCoord: xCoord - 1,
      yCoord,
    });
  }

  if (direction === "right") {
    return ({ xCoord, yCoord }: LocationType) => ({
      xCoord: xCoord + 1,
      yCoord,
    });
  }

  return ({ xCoord, yCoord }: LocationType) => ({
    xCoord,
    yCoord,
  });
}

export function updateLocation(
  plan: PixelType[][],
  location: PixelType["location"],
  id: PixelType["id"]
) {
  const newPlan = [...plan];
  newPlan[location.yCoord][location.xCoord].id = id;
  return newPlan;
}

export function updatePlayerLocation(
  plan: PixelType[][],
  newPlayerLocation: PixelType["location"],
  previousPlayerLocation: PixelType["location"]
) {
  const originalPlan = [...plan];

  const removePlayerFromOldLocationPlan = updateLocation(
    originalPlan,
    previousPlayerLocation,
    "."
  );
  const movePlayerToNewLocationPlan = updateLocation(
    removePlayerFromOldLocationPlan,
    newPlayerLocation,
    "@"
  );

  return movePlayerToNewLocationPlan;
}

export function move(
  keyPressed: string,
  plan: PixelType[][],
  updatePlan: Dispatch<SetStateAction<PixelType[][]>>
) {
  const previousPlayerLocation = getPlayerLocation(plan);

  const moveDirection = getMoveCallback(keyPressed);

  const newPlayerLocation = moveDirection(previousPlayerLocation);
  if (isMoveValid(newPlayerLocation)) {
    const pixelAtNewLocation = getPixelFromLocation(plan, newPlayerLocation);

    if (isEmptySpace(pixelAtNewLocation)) {
      const newPlan = updatePlayerLocation(
        plan,
        newPlayerLocation,
        previousPlayerLocation
      );

      updatePlan(newPlan);
    }
  }
}

//if it isn't the edge of the board
export function isMoveValid(newPlayerLocation: LocationType) {
  const { xCoord, yCoord } = newPlayerLocation;
  return xCoord >= 0 && xCoord < 22 && yCoord >= 0 && yCoord < 9;
}

export const isEmptySpace = (pixelAtNewLocation: PixelType) =>
  pixelAtNewLocation.id === ".";
