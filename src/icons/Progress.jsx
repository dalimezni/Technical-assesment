import React from "react";

function Progress() {
  const circumference = 30 * 2 * Math.PI;
  const percent = 75;
  return (
    <svg className="w-20 h-20" aria-hidden="true" x-cloak="true">
      <circle
        className="text-gray-700"
        strokeWidth="10"
        stroke="#1F2937"
        fill="transparent"
        r="31"
        cx="40"
        cy="40"
      />

      <circle
        className="text-white"
        strokeWidth="10"
        strokeLinecap="butt"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (percent / 100) * circumference}
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <circle
        className="text-gray-700"
        stroke="#1F2937"
        fill="transparent"
        r="26"
        cx="40"
        cy="40"
      />
    </svg>
  );
}

export default Progress;
