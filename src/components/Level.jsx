import React from "react";
import Progress from "../icons/Progress";

function Level() {
  return (
    <div className="w-20 h-20 bg-white rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-bold">
      <Progress />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-xs uppercase">Level</span>
        <span className="text-md text-pink-700">12</span>
      </div>
    </div>
  );
}

export default Level;
