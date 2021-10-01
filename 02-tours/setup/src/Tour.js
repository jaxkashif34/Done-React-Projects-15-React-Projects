import React, { useState } from "react";

const Tour = ({ image, id, name, info, price, removeTourHandler }) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore((prev) => {
      return !prev;
    });
  };

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              readMoreHandler();
            }}
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTourHandler(id);
          }}
        >
          not Intrested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
