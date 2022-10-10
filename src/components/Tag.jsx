import React from "react";

function Tag({ hasStarted, remaining }) {
  return (
    <span
      className={`rounded-sm px-1 py-[2px] text-white font-semibold text-xs ${
        hasStarted ? "bg-gray-800" : "bg-pink-400 "
      } `}
    >
      {hasStarted ? `${remaining} completes left` : "NEW"}
    </span>
  );
}

export default Tag;
