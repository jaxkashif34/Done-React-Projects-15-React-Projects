import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTourHandler }) => {
  return (
    <section>
      <div className="title">
        <h2>Ours Tour</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTourHandler={removeTourHandler}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
