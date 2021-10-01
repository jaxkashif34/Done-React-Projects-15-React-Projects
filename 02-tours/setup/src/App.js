import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { ToursData } from "./tourData";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(ToursData);

  const removeTourHandler = (index) => {
    let remove = tours.filter((tour) => {
      return tour.id !== index;
    });
    setTours(remove);
  };

  const fetchTours = () => {
    setLoading(false);
    setTours(ToursData);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTourHandler={removeTourHandler} />
      </main>
    </>
  );
}

export default App;
