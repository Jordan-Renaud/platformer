"use client";
import { Dispatch, KeyboardEvent, SetStateAction, useContext } from "react";
import { PlanContext } from "./PlanContext";
import { LocationType, PixelType } from "./Types";
import { getPlayerLocation, updatePlayerLocation } from "./Utils";

const isValidKey = ({ key }: KeyboardEvent) =>
  key === "ArrowUp" ||
  key === "ArrowDown" ||
  key === "ArrowLeft" ||
  key === "ArrowRight";

function move1(
  keyPressed: string,
  plan: PixelType[][],
  updatePlan: Dispatch<SetStateAction<PixelType[][]>>
) {
  const previousPlayerLocation = getPlayerLocation(plan);
  console.log({ previousPlayerLocation });
  const moveDirection = getMoveCallback(keyPressed);
  console.log({ moveDirection });
  const newPlayerLocation = moveDirection(previousPlayerLocation);
  const newPlan = updatePlayerLocation(
    plan,
    newPlayerLocation,
    previousPlayerLocation
  );

  updatePlan(newPlan);
}

function getMoveCallback(keyPressed: string) {
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

//checks to see if the pixel is something we can move to
function checkIfMoveIsValid() {
  //work on this next
  //if it isn't blocked
  //if it isn't the edge of the board
}

export default function Player() {
  const { plan, updatePlan } = useContext(PlanContext);
  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        event.preventDefault();
        if (isValidKey(event)) {
          move1(event.key, plan, updatePlan);
        }
      }}
      className="player"
    />
  );
}
