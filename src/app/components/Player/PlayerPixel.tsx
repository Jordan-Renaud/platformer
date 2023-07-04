"use client";
import { KeyboardEvent, useContext } from "react";
import { PlanContext } from "../PlanContext";
import { move } from "./PlayerMovement";

const isValidKey = ({ key }: KeyboardEvent) =>
  key === "ArrowUp" ||
  key === "ArrowDown" ||
  key === "ArrowLeft" ||
  key === "ArrowRight";

export default function PlayerPixel() {
  const { plan, updatePlan } = useContext(PlanContext);
  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        event.preventDefault();
        if (isValidKey(event)) {
          move(event.key, plan, updatePlan);
        }
      }}
      className="player"
    />
  );
}
