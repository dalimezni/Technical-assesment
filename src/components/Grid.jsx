import React from "react";
import Card from "./Card";
import DATA from "../data.json";

function Grid() {
  return (
    <section className="grid grid-cols-2 gap-4 md:gap-8 w-full lg:w-3/5 px-2 overflow-scroll">
      {DATA &&
        DATA.data.map((card, index) => (
          <Card key={`card-${index}`} data={card} />
        ))}
    </section>
  );
}

export default Grid;
