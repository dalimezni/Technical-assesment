import React from "react";
import Currency from "../icons/Currency";
import Tag from "./Tag";

function Card({ data }) {
  return (
    <article className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <img src={`./assets/${data.image}`} alt="" className="h-auto w-1/4" />
        <div className="flex-1 h-full flex flex-col justify-between items-start">
          <h2 className="font-bold text-md md:text-2xl">{data.title}</h2>
          <Tag hasStarted={data.hasStarted} remaining={data.remaining} />
          <div className="flex items-center space-x-1 text-xs md:text-sm">
            <img src="/assets/clock.png" alt="" className="w-3 h-auto" />
            <span>{`${data.duration} Minutes`}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs md:text-sm">
            <img src="/assets/questionmark.png" alt="" className="w-3 h-auto" />
            <span>{`${data.qualifications} Qualifications`}</span>
          </div>
        </div>
      </div>
      <button className="font-semibold font-lg bg-pink-400 text-white rounded-md py-2 flex justify-center space-x-2">
        <Currency />
        <span>{data.price}</span>
      </button>
    </article>
  );
}

export default Card;
